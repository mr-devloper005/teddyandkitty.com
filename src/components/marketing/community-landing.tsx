import Link from 'next/link'
import { ArrowRight, LayoutGrid, Heart, Compass, Users } from 'lucide-react'
import { CATEGORY_OPTIONS } from '@/lib/categories'
import { SITE_CONFIG } from '@/lib/site-config'
import { exploreLandingCopy } from '@/config/site.content'

type Ui = {
  muted: string
  panel: string
  soft: string
  input: string
  button: string
}

export function CommunityLanding({
  normalizedCategory,
  taskRoute,
  ui,
}: {
  normalizedCategory: string
  taskRoute: string
  ui: Ui
}) {
  const copy = exploreLandingCopy.community
  const heroImage =
    'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=2000&q=80'

  return (
    <>
      <section className="relative -mx-4 mb-14 overflow-hidden rounded-lg sm:-mx-6 lg:-mx-8">
        <img
          src={heroImage}
          alt=""
          className="absolute inset-0 h-full min-h-[320px] w-full object-cover md:min-h-[380px]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1b4332]/90 via-[#1b4332]/55 to-[#1b4332]/35" aria-hidden />
        <div className="relative z-10 px-6 py-14 md:px-10 md:py-16 lg:px-12">
          <span className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/95">
            <Users className="h-3.5 w-3.5" />
            {copy.eyebrow}
          </span>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white md:text-5xl">{copy.headline}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88">{copy.subhead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/create/social"
              className="inline-flex items-center gap-2 rounded-md bg-[#d4a373] px-5 py-2.5 text-sm font-semibold text-[#1b4332] shadow-md hover:bg-[#c49263]"
            >
              {copy.primaryCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/images"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/16"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="mb-14 grid gap-4 sm:grid-cols-3">
        {copy.pillars.map((item) => (
          <div key={item.title} className={`rounded-lg p-6 ${ui.panel}`}>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b8894a]">{item.kicker}</p>
            <h2 className="mt-2 text-lg font-semibold text-foreground">{item.title}</h2>
            <p className={`mt-2 text-sm leading-7 ${ui.muted}`}>{item.body}</p>
          </div>
        ))}
      </section>

      <section className="mb-14 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className={`rounded-lg p-6 md:p-8 ${ui.panel}`}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b8894a]">Why {SITE_CONFIG.name}</h2>
          <p className={`mt-4 text-sm leading-8 ${ui.muted}`}>{copy.story}</p>
          <ul className="mt-6 space-y-3 text-sm text-foreground">
            {copy.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={`rounded-lg p-6 md:p-8 ${ui.soft}`}>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">{copy.filterTitle}</h2>
          <p className={`mt-2 text-sm ${ui.muted}`}>{copy.filterHint}</p>
          <form className="mt-6 grid gap-4" action={taskRoute}>
            <div>
              <label className={`text-xs font-medium uppercase tracking-wide ${ui.muted}`}>Category</label>
              <select name="category" defaultValue={normalizedCategory} className={`mt-2 h-11 w-full rounded-lg px-3 text-sm ${ui.input}`}>
                <option value="all">All categories</option>
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button type="submit" className={`h-11 rounded-lg text-sm font-semibold ${ui.button}`}>
              {copy.filterCta}
            </button>
          </form>
          <form action="/search" method="get" className="mt-6 border-t border-border pt-6">
            <label className={`text-xs font-medium uppercase tracking-wide ${ui.muted}`}>Search</label>
            <div className="mt-2 flex flex-col gap-2 sm:flex-row">
              <input name="q" placeholder={copy.searchPlaceholder} className={`h-11 flex-1 rounded-lg px-3 text-sm ${ui.input}`} />
              <button type="submit" className={`h-11 shrink-0 rounded-lg px-4 text-sm font-semibold ${ui.button}`}>
                Go
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="mb-6 grid gap-4 rounded-lg border border-border bg-muted/30 p-6 sm:grid-cols-3">
        <div className="flex items-start gap-3">
          <LayoutGrid className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">Same rhythm as home</p>
            <p className={`mt-1 text-xs leading-relaxed ${ui.muted}`}>Cards, borders, and typography align with your homepage recipe.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Heart className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">Creators first</p>
            <p className={`mt-1 text-xs leading-relaxed ${ui.muted}`}>Link out to profiles and galleries when a thread deserves more room.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Compass className="mt-0.5 h-5 w-5 text-primary" />
          <div>
            <p className="text-sm font-semibold text-foreground">Help when you need it</p>
            <p className={`mt-1 text-xs leading-relaxed ${ui.muted}`}>
              <Link href="/help" className="font-medium text-foreground underline-offset-4 hover:underline">
                Help Center
              </Link>{' '}
              covers moderation, account recovery, and tips.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
