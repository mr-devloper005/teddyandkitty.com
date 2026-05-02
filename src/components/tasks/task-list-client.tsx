"use client";

import { useMemo } from "react";
import { TaskPostCard } from "@/components/shared/task-post-card";
import { buildPostUrl } from "@/lib/task-data";
import { normalizeCategory, isValidCategory } from "@/lib/categories";
import type { TaskKey } from "@/lib/site-config";
import type { SitePost } from "@/lib/site-connector";
import { getLocalPostsForTask } from "@/lib/local-posts";

type Props = {
  task: TaskKey;
  initialPosts: SitePost[];
  category?: string;
};

export function TaskListClient({ task, initialPosts, category }: Props) {
  const localPosts = getLocalPostsForTask(task);

  const merged = useMemo(() => {
    const bySlug = new Set<string>();
    const combined: Array<SitePost & { localOnly?: boolean; task?: TaskKey }> = [];

    localPosts.forEach((post) => {
      if (post.slug) {
        bySlug.add(post.slug);
      }
      combined.push(post);
    });

    initialPosts.forEach((post) => {
      if (post.slug && bySlug.has(post.slug)) return;
      combined.push(post as any);
    });

    const normalizedCategory = category ? normalizeCategory(category) : "all";
    console.log("[TaskListClient] Filtering by category:", category, "-> normalized:", normalizedCategory);
    console.log("[TaskListClient] Total posts:", combined.length);
    
    if (normalizedCategory === "all") {
      return combined.filter((post) => {
        const content = post.content && typeof post.content === "object" ? post.content : {};
        const value = typeof (content as any).category === "string" ? (content as any).category : "";
        return !value || isValidCategory(value);
      });
    }

    const filtered = combined.filter((post) => {
      const content = post.content && typeof post.content === "object" ? post.content : {};
      const rawValue = (content as any).category;
      const value = typeof rawValue === "string" ? normalizeCategory(rawValue) : "";
      const matches = value === normalizedCategory;
      if (matches) {
        console.log("[TaskListClient] Post matches:", post.title, "category:", rawValue, "->", value);
      }
      return matches;
    });
    
    console.log("[TaskListClient] Filtered posts:", filtered.length);
    return filtered;
  }, [category, initialPosts, localPosts]);

  if (!merged.length) {
    const normalizedCategory = category ? normalizeCategory(category) : "all";
    return (
      <div className="rounded-2xl border border-dashed border-border p-10 text-center">
        <p className="text-muted-foreground">
          {normalizedCategory !== "all" 
            ? `No galleries found in the "${normalizedCategory}" category.`
            : "No posts yet for this section."}
        </p>
      </div>
    );
  }

  return (
    <div
      className={
        task === "image"
          ? "grid gap-6 md:grid-cols-2 xl:grid-cols-12"
          : task === "profile"
            ? "grid gap-6 lg:grid-cols-2"
            : "grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
      }
    >
      {merged.map((post) => {
        const localOnly = (post as any).localOnly;
        const href = localOnly
          ? `/local/${task}/${post.slug}`
          : buildPostUrl(task, post.slug);
        const imageCardClass =
          task === "image"
            ? merged.length > 1 && merged[0]?.id === post.id
              ? "xl:col-span-7"
              : merged.length > 2 && merged[1]?.id === post.id
                ? "xl:col-span-5"
                : "xl:col-span-4"
            : "";

        return (
          <div key={post.id} className={imageCardClass}>
            <TaskPostCard post={post} href={href} taskKey={task} />
          </div>
        );
      })}
    </div>
  );
}
