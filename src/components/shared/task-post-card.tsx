import { ContentImage } from '@/components/shared/content-image'
import Link from 'next/link'
import { ArrowUpRight, ExternalLink, FileText, Mail, MapPin, Sparkles, Tag } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import { CATEGORY_OPTIONS, normalizeCategory } from '@/lib/categories'
import type { TaskKey } from '@/lib/site-config'
import { SITE_THEME } from '@/config/site.theme'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { TASK_POST_CARD_OVERRIDE_ENABLED, TaskPostCardOverride } from '@/overrides/task-post-card'

type ListingContent = {
  location?: string
  category?: string
  description?: string
  email?: string
}

const stripHtml = (value?: string | null) =>
  (value || '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<\/?[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const getExcerpt = (value?: string | null, maxLength = 140) => {
  const text = stripHtml(value)
  if (!text) return ''
  if (text.length <= maxLength) return text
  return `${text.slice(0, maxLength).trimEnd()}…`
}

const getContent = (post: SitePost): ListingContent => {
  const content = post.content && typeof post.content === 'object' ? post.content : {}
  return content as ListingContent
}

const getImageUrl = (post: SitePost, content: ListingContent) => {
  const media = Array.isArray(post.media) ? post.media : []
  const mediaUrl = media[0]?.url
  if (mediaUrl) return mediaUrl

  const contentAny = content as Record<string, unknown>
  const contentImage = typeof contentAny.image === 'string' ? contentAny.image : null
  if (contentImage) return contentImage

  const contentImages = Array.isArray(contentAny.images) ? contentAny.images : []
  const firstImage = contentImages.find((value) => typeof value === 'string')
  if (firstImage) return firstImage as string

  const contentLogo = typeof contentAny.logo === 'string' ? contentAny.logo : null
  if (contentLogo) return contentLogo

  return '/placeholder.svg?height=640&width=960'
}

const cardFrame =
  'rounded-lg border border-border bg-card text-card-foreground shadow-md transition duration-300 hover:-translate-y-0.5 hover:shadow-lg'

const cardStyles = {
  'listing-elevated': {
    frame: cardFrame,
    muted: 'text-muted-foreground',
    title: 'text-foreground',
    badge: 'bg-primary text-primary-foreground',
  },
  'editorial-feature': {
    frame: cardFrame,
    muted: 'text-muted-foreground',
    title: 'text-foreground',
    badge: 'bg-primary text-primary-foreground',
  },
  'studio-panel': {
    frame: cardFrame,
    muted: 'text-muted-foreground',
    title: 'text-foreground',
    badge: 'bg-primary text-primary-foreground',
  },
  'catalog-grid': {
    frame: cardFrame,
    muted: 'text-muted-foreground',
    title: 'text-foreground',
    badge: 'bg-primary text-primary-foreground',
  },
} as const

const getVariantForTask = (taskKey: TaskKey) => SITE_THEME.cards[taskKey] || 'listing-elevated'

export function TaskPostCard({
  post,
  href,
  taskKey,
  compact,
}: {
  post: SitePost
  href: string
  taskKey?: TaskKey
  compact?: boolean
}) {
  if (TASK_POST_CARD_OVERRIDE_ENABLED) {
    return <TaskPostCardOverride post={post} href={href} taskKey={taskKey} compact={compact} />
  }

  const content = getContent(post)
  const image = getImageUrl(post, content)
  const rawCategory = content.category || post.tags?.[0] || 'Post'
  const normalizedCategory = normalizeCategory(rawCategory)
  const category = CATEGORY_OPTIONS.find((item) => item.slug === normalizedCategory)?.name || rawCategory
  const variant = taskKey || 'listing'
  const visualVariant = cardStyles[getVariantForTask(variant)]
  const isBookmarkVariant = variant === 'sbm' || variant === 'social'
  const imageAspect = variant === 'image' ? 'aspect-[4/5]' : variant === 'article' ? 'aspect-[16/10]' : variant === 'pdf' ? 'aspect-[4/5]' : variant === 'classified' ? 'aspect-[16/11]' : 'aspect-[4/3]'
  const altText = `${post.title} ${category} ${variant === 'listing' ? 'business listing' : variant} image`
  const imageSizes = variant === 'article' ? '(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 420px' : variant === 'image' ? '(max-width: 640px) 82vw, (max-width: 1024px) 34vw, 320px' : '(max-width: 640px) 85vw, (max-width: 1024px) 42vw, 340px)'

  const { recipe } = getFactoryState()
  const isDirectoryProduct = recipe.homeLayout === 'listing-home' || recipe.homeLayout === 'classified-home'
  const isDirectorySurface = isDirectoryProduct && (variant === 'listing' || variant === 'classified' || variant === 'profile')

  if (variant === 'image') {
    return (
      <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#1b4332]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(249,247,242,0.96))] shadow-[0_24px_64px_rgba(27,67,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(27,67,50,0.12)]">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <ContentImage src={image} alt={altText} fill sizes={imageSizes} quality={75} className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" intrinsicWidth={960} intrinsicHeight={1200} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10281f]/78 via-[#10281f]/12 to-transparent" />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
              <Tag className="h-3.5 w-3.5" />
              {category}
            </span>
          </div>
          <div className="absolute inset-x-0 bottom-0 p-5 text-white">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f3d7b0]">Featured gallery</p>
            <h3 className="mt-2 line-clamp-2 text-[1.7rem] font-semibold leading-tight">{post.title}</h3>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <p className="text-sm leading-8 text-muted-foreground">{getExcerpt(content.description || post.summary, 180) || 'Explore a visual story arranged with stronger focus and slower pacing.'}</p>
          <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#1b4332]/6 px-3 py-1 text-[#1b4332]">
              <Sparkles className="h-3.5 w-3.5" />
              Curated visual set
            </span>
            {content.location ? <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{content.location}</span> : null}
          </div>
          <div className="mt-auto pt-6 text-sm font-semibold text-[#1b4332]">Open gallery</div>
        </div>
      </Link>
    )
  }

  if (variant === 'profile') {
    return (
      <Link href={href} className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#1b4332]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(249,247,242,0.95))] shadow-[0_20px_56px_rgba(27,67,50,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(27,67,50,0.12)] sm:flex-row">
        <div className="relative min-h-[280px] overflow-hidden bg-muted sm:w-[40%] sm:min-h-full">
          <ContentImage src={image} alt={altText} fill sizes="(max-width: 640px) 100vw, 360px" quality={75} className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" intrinsicWidth={960} intrinsicHeight={1200} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10281f]/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/14 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] backdrop-blur-sm">
              {category}
            </span>
            <span className="rounded-full bg-white/88 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1b4332]">
              Profile
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6 sm:p-7">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#b8894a]">Profile spotlight</p>
          <h3 className="mt-3 text-[1.85rem] font-semibold leading-tight text-foreground">{post.title}</h3>
          <p className="mt-4 text-sm leading-8 text-muted-foreground">{getExcerpt(content.description || post.summary, 220) || 'Meet the people and brands shaping this visual community.'}</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-muted-foreground">
            {content.location ? <span className="inline-flex items-center gap-1 rounded-full bg-[#1b4332]/6 px-3 py-1 text-[#1b4332]"><MapPin className="h-3.5 w-3.5" />{content.location}</span> : null}
            {content.email ? <span className="inline-flex items-center gap-1 rounded-full bg-[#d4a373]/12 px-3 py-1 text-[#7f5d33]"><Mail className="h-3.5 w-3.5" />{content.email}</span> : null}
          </div>
          <div className="mt-auto flex items-center justify-between pt-7">
            <span className="text-sm font-semibold text-[#1b4332]">View profile</span>
            <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </Link>
    )
  }

  if (isDirectorySurface) {
    const cardTone = {
      frame: cardFrame,
      badge: 'bg-primary text-primary-foreground',
      muted: 'text-muted-foreground',
      title: 'text-foreground',
      cta: 'text-primary font-semibold',
    }

    return (
      <Link href={href} className={`group flex h-full flex-col overflow-hidden ${cardTone.frame}`}>
        <div className="relative aspect-[16/11] overflow-hidden bg-muted">
          <ContentImage src={image} alt={altText} fill sizes={imageSizes} quality={75} className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" intrinsicWidth={960} intrinsicHeight={720} />
          <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
            <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${cardTone.badge}`}>
              <Tag className="h-3.5 w-3.5" />
              {category}
            </span>
            <span className="rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm">
              {variant === 'classified' ? 'Open now' : 'Verified'}
            </span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center justify-between gap-3">
            <h3 className={`line-clamp-2 text-xl font-semibold leading-snug ${cardTone.title}`}>{post.title}</h3>
            <ArrowUpRight className={`h-5 w-5 shrink-0 ${cardTone.muted}`} />
          </div>
          <p className={`mt-3 line-clamp-3 text-sm leading-7 ${cardTone.muted}`}>{getExcerpt(content.description || post.summary) || 'Explore this local listing.'}</p>
          <div className="mt-5 flex flex-wrap gap-3 text-xs">
            {content.location ? <span className={`inline-flex items-center gap-1 ${cardTone.muted}`}><MapPin className="h-3.5 w-3.5" />{content.location}</span> : null}
            {content.email ? <span className={`inline-flex items-center gap-1 ${cardTone.muted}`}><Mail className="h-3.5 w-3.5" />{content.email}</span> : null}
          </div>
          <div className={`mt-auto pt-5 text-sm font-semibold ${cardTone.cta}`}>{variant === 'classified' ? 'View offer' : 'View details'}</div>
        </div>
      </Link>
    )
  }

  if (isBookmarkVariant) {
    return (
      <Link href={href} className={`group flex h-full flex-row items-start gap-4 overflow-hidden p-5 transition duration-300 ${visualVariant.frame}`}>
        <div className="mt-1 rounded-full bg-muted p-2.5 text-foreground transition group-hover:scale-105">
          <ExternalLink className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${visualVariant.badge}`}>
              <Tag className="h-3.5 w-3.5" />
              {category}
            </span>
            {content.location ? <span className={`inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><MapPin className="h-3.5 w-3.5" />{content.location}</span> : null}
          </div>
          <h3 className={`mt-3 line-clamp-2 text-lg font-semibold leading-snug group-hover:opacity-85 ${visualVariant.title}`}>{post.title}</h3>
          <p className={`mt-2 line-clamp-3 text-sm leading-7 ${visualVariant.muted}`}>{getExcerpt(content.description || post.summary, compact ? 120 : 180) || 'Explore this bookmark.'}</p>
          {content.email ? <div className={`mt-3 inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><Mail className="h-3.5 w-3.5" />{content.email}</div> : null}
        </div>
      </Link>
    )
  }

  return (
    <Link href={href} className={`group flex h-full flex-col overflow-hidden transition duration-300 ${visualVariant.frame}`}>
      <div className={`relative ${imageAspect} overflow-hidden bg-muted`}>
        <ContentImage src={image} alt={altText} fill sizes={imageSizes} quality={75} className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" intrinsicWidth={960} intrinsicHeight={720} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-80" />
        <span className={`absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] ${visualVariant.badge}`}>
          <Tag className="h-3.5 w-3.5" />
          {category}
        </span>
        {variant === 'pdf' && <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-background/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-foreground shadow-sm"><FileText className="h-3.5 w-3.5" />PDF</span>}
      </div>
      <div className={`flex flex-1 flex-col p-5 ${compact ? 'py-4' : ''}`}>
        <h3 className={`line-clamp-2 font-semibold leading-snug ${variant === 'article' ? 'text-[1.35rem]' : 'text-lg'} ${visualVariant.title}`}>{post.title}</h3>
        <p className={`mt-3 text-sm leading-7 ${variant === 'article' ? 'line-clamp-4' : 'line-clamp-3'} ${visualVariant.muted}`}>{getExcerpt(content.description || post.summary) || 'Explore this post.'}</p>
        <div className="mt-auto pt-4">
          {content.location && <div className={`inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><MapPin className="h-3.5 w-3.5" />{content.location}</div>}
          {content.email && <div className={`mt-2 inline-flex items-center gap-1 text-xs ${visualVariant.muted}`}><Mail className="h-3.5 w-3.5" />{content.email}</div>}
        </div>
      </div>
    </Link>
  )
}
