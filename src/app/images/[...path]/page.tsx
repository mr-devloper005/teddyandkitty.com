import { TaskListPage } from "@/components/tasks/task-list-page";
import { TaskDetailPage } from "@/components/tasks/task-detail-page";
import { buildTaskMetadata, buildPostMetadata } from "@/lib/seo";
import { taskPageMetadata } from "@/config/site.content";
import { fetchTaskPostBySlug, fetchTaskPosts } from "@/lib/task-data";
import { notFound } from "next/navigation";

export const revalidate = 3;

export async function generateStaticParams() {
  const posts = await fetchTaskPosts("image", 50);
  const paths = posts.map((post) => ({ path: [post.slug] }));
  // Add some common category paths for pre-rendering
  const categories = ["beauty", "business", "health", "technology", "lifestyle"];
  categories.forEach((cat) => paths.push({ path: [`category-${cat}`] }));
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const resolvedParams = await params;
  const path = resolvedParams.path;
  const firstSegment = path?.[0] || "";

  // If it's a category path
  if (firstSegment.startsWith("category-")) {
    const category = firstSegment.replace("category-", "");
    return buildTaskMetadata("image", {
      title: `${taskPageMetadata.image.title} - ${category}`,
      description: `Browse ${category} images and galleries`,
    });
  }

  // Otherwise it's an image detail page
  const post = await fetchTaskPostBySlug("image", firstSegment);
  return post
    ? await buildPostMetadata("image", post)
    : await buildTaskMetadata("image");
}

function isCategoryPath(path: string): boolean {
  return path.startsWith("category-");
}

function extractCategory(path: string): string {
  return path.replace("category-", "");
}

export default async function ImagesCatchAllPage({
  params,
}: {
  params: Promise<{ path: string[] }>;
}) {
  const resolvedParams = await params;
  const path = resolvedParams.path;
  const firstSegment = path?.[0] || "";

  // Handle category filter routes
  if (isCategoryPath(firstSegment)) {
    const category = extractCategory(firstSegment);
    console.log("[Images] Filtering by category:", category);
    return <TaskListPage task="image" category={category} />;
  }

  // Handle image detail routes
  const post = await fetchTaskPostBySlug("image", firstSegment);
  if (!post) {
    notFound();
  }
  return <TaskDetailPage task="image" slug={firstSegment} />;
}
