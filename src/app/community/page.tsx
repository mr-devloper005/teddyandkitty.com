import type { Metadata } from 'next'
import { TaskListPage } from '@/components/tasks/task-list-page'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

export const revalidate = 3

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/community',
    title: `Community | ${SITE_CONFIG.name}`,
    description:
      'Updates, prompts, and gentle conversation on Teddy And Kitty—same forest, cream, and gold experience as galleries and profiles.',
    openGraphTitle: `Community | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Share updates and browse the community feed with Teddy And Kitty’s calm visual language.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['community', 'updates', 'Teddy And Kitty', ...SITE_CONFIG.seo.keywords],
  })
}

export default function CommunityPage({ searchParams }: { searchParams?: { category?: string } }) {
  return <TaskListPage task="social" category={searchParams?.category} />
}
