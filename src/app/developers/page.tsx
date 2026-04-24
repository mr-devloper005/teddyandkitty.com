import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Book, Code2, KeyRound, LineChart, Webhook } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

const pillars = [
  {
    title: 'REST-ish feeds',
    body: 'Pull published posts, profiles, and media URLs with predictable pagination—ideal for mirrors, backups, and internal tools.',
    icon: Code2,
  },
  {
    title: 'Auth & keys',
    body: 'Use scoped keys where available; never ship secrets in the browser. Rotate on a schedule and log access from staging first.',
    icon: KeyRound,
  },
  {
    title: 'Webhooks (roadmap)',
    body: 'We are shaping lightweight hooks for publish events. Watch the status page for the first beta window.',
    icon: Webhook,
  },
  {
    title: 'Fair use',
    body: 'Cache aggressively, backoff on errors, and label derived datasets. Teddy And Kitty is creator-first—attribute generously.',
    icon: LineChart,
  },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/developers',
    title: `Developers | ${SITE_CONFIG.name}`,
    description:
      'Integration notes, API posture, and builder resources for Teddy And Kitty—same forest, cream, and gold system as the consumer experience.',
    openGraphTitle: `Developers | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Build alongside Teddy And Kitty—feeds, keys, and roadmap signals for thoughtful integrations.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['api', 'developers', 'integration', 'Teddy And Kitty', ...SITE_CONFIG.seo.keywords],
  })
}

export default function DevelopersPage() {
  return (
    <div className="site-page">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-border bg-[#f9f7f2]">
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#d4a373]/20 blur-3xl" aria-hidden />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-[#1b4332]/10 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8894a]">Developers</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-[#1b4332] md:text-5xl">
              Build calm tools on top of a visual platform.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#1b4332]/80">
              Teddy And Kitty prioritizes galleries and profiles. APIs follow that same philosophy: predictable shapes, generous defaults, and
              documentation that reads like product copy—not legalese.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
                <Link href="/status">
                  Check system status
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-md border-[#1b4332]/25 bg-white text-[#1b4332] hover:bg-[#1b4332]/5">
                <Link href="/contact">Partner with us</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {pillars.map((item) => (
              <Card key={item.title} className="border-border bg-card shadow-sm">
                <CardContent className="flex gap-4 p-6 sm:p-7">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/40">
                    <item.icon className="h-5 w-5 text-[#b8894a]" aria-hidden />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-foreground">{item.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-lg border border-border bg-muted/20 p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8894a]">
                <Book className="h-4 w-4" />
                Reference layout
              </div>
              <h2 className="mt-3 text-2xl font-semibold text-foreground">How we think about payloads</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Posts expose title, slug, summary, tags, media arrays, and timestamps. Profiles layer identity fields on top. When in doubt,
                mirror what you already see in the public gallery and profile routes—those responses are the contract we keep stable.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-foreground">
                <li className="flex gap-2">
                  <span className="text-[#d4a373]" aria-hidden>
                    →
                  </span>
                  Prefer server-to-server calls; respect rate limits and cache headers.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#d4a373]" aria-hidden>
                    →
                  </span>
                  Use staging credentials before touching production creator data.
                </li>
                <li className="flex gap-2">
                  <span className="text-[#d4a373]" aria-hidden>
                    →
                  </span>
                  Surface <Link href="/help" className="font-medium underline-offset-4 hover:underline">Help Center</Link> links inside your
                  integrations so end users know where to go.
                </li>
              </ul>
            </div>

            <Card className="border border-[#1b4332]/15 bg-[#1b4332] text-[#f9f7f2] shadow-md">
              <CardContent className="p-8">
                <h3 className="text-lg font-semibold">Need a formal partnership?</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Agencies, marketplaces, and rescue networks: tell us about your traffic profile, data residency needs, and timeline. We will
                  respond with the lightest path that keeps creators safe.
                </p>
                <Button asChild className="mt-6 rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
                  <Link href="/contact">Start the thread</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
