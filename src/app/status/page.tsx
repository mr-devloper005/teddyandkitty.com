import type { Metadata } from 'next'
import Link from 'next/link'
import { Activity, CheckCircle2, Clock, ExternalLink, Server } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

const services = [
  { name: 'Web application', detail: 'Next.js edge + origin', status: 'Operational' as const },
  { name: 'Media delivery', detail: 'Image CDN & transforms', status: 'Operational' as const },
  { name: 'Search & discovery', detail: 'Feeds + filters', status: 'Operational' as const },
  { name: 'Auth sessions', detail: 'Login & signup flows', status: 'Operational' as const },
]

const incidents = [
  { date: 'Apr 2, 2026', title: 'Elevated latency on gallery grids', status: 'Resolved' as const, body: 'Mitigated via cache warming; no data loss.' },
  { date: 'Mar 12, 2026', title: 'Delayed notifications', status: 'Resolved' as const, body: 'Queue drained within 42 minutes.' },
  { date: 'Feb 22, 2026', title: 'Search indexing lag', status: 'Resolved' as const, body: 'Backfill completed overnight.' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/status',
    title: `System status | ${SITE_CONFIG.name}`,
    description: 'Live posture for Teddy And Kitty—uptime, incidents, and developer-facing signals in the same forest-and-gold visual language.',
    openGraphTitle: `System status | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Operational transparency for Teddy And Kitty visitors and integrators.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['status', 'uptime', 'incidents', 'Teddy And Kitty', ...SITE_CONFIG.seo.keywords],
  })
}

export default function StatusPage() {
  return (
    <div className="site-page">
      <NavbarShell />
      <main>
        <section className="border-b border-border bg-gradient-to-b from-muted/40 to-background">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:flex lg:items-end lg:justify-between lg:px-8 lg:py-16">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#b8894a]">
                <Activity className="h-4 w-4" />
                System status
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-5xl">All systems calm.</h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                We publish incidents here first. If you are building integrations, pair this page with the developer notes—same palette, same
                candor.
              </p>
            </div>
            <Button asChild variant="outline" className="mt-8 shrink-0 rounded-md border-border lg:mt-0">
              <Link href="/developers">
                Builder hub
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <Card key={service.name} className="border-border bg-card shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h2 className="text-base font-semibold text-foreground">{service.name}</h2>
                      <p className="mt-1 text-xs text-muted-foreground">{service.detail}</p>
                    </div>
                    <Server className="h-5 w-5 shrink-0 text-[#b8894a]" aria-hidden />
                  </div>
                  <Badge className="mt-4 bg-[#1b4332]/10 font-semibold text-[#1b4332] hover:bg-[#1b4332]/15">
                    <CheckCircle2 className="mr-1.5 h-3.5 w-3.5" />
                    {service.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.95fr]">
            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#b8894a]" />
                  <h3 className="text-lg font-semibold text-foreground">Incident history</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Recent events, plain language. We will add RSS when volume justifies it.</p>
                <div className="mt-6 space-y-4">
                  {incidents.map((incident) => (
                    <div
                      key={incident.title}
                      className="rounded-lg border border-border bg-muted/30 px-4 py-4 transition-colors hover:bg-muted/45"
                    >
                      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                        <span>{incident.date}</span>
                        <span className="rounded-full bg-[#1b4332]/10 px-2 py-0.5 font-medium text-[#1b4332]">{incident.status}</span>
                      </div>
                      <div className="mt-2 text-sm font-semibold text-foreground">{incident.title}</div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{incident.body}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col justify-between rounded-lg border border-border bg-[#1b4332] p-8 text-[#f9f7f2]">
              <div>
                <h3 className="text-xl font-semibold">Subscribe for updates</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  Formal status subscriptions are on the roadmap. Until then, follow announcements in Community or drop your email via Contact—we
                  bundle infra notes for partners there.
                </p>
              </div>
              <Button asChild className="mt-8 w-fit rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
                <Link href="/contact">Request notifications</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
