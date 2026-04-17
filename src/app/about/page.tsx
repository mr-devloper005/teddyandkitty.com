import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Camera, Heart, Leaf, Palette, Shield } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

const pillars = [
  {
    title: 'Gallery-first calm',
    body: 'Imagery leads; chrome stays quiet. Forest overlays, cream panels, and gold CTAs repeat everywhere so the product feels intentional.',
    icon: Camera,
  },
  {
    title: 'Profiles with warmth',
    body: 'Creators are more than metrics. Bios, highlights, and outbound links stay structured so trust reads instantly—especially on small screens.',
    icon: Heart,
  },
  {
    title: 'Slow-tech values',
    body: 'We bias toward fast loads, legible contrast, and keyboard-friendly controls. Discovery should feel restorative, not extractive.',
    icon: Leaf,
  },
]

const craft = [
  { title: 'Typography', detail: 'Serif headlines for story, sans-serif UI for wayfinding—same rhythm as the homepage hero.' },
  { title: 'Color', detail: 'Forest #1b4332 anchors trust; #d4a373 gold signals action; cream backgrounds keep long reads soft.' },
  { title: 'Motion', detail: 'Hover lifts and gentle fades only where they clarify hierarchy—never decoration for its own sake.' },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/about',
    title: `About | ${SITE_CONFIG.name}`,
    description:
      'Why Teddy And Kitty exists—a boutique surface for galleries and profiles, built with forest, cream, and gold craft across every page.',
    openGraphTitle: `About | ${SITE_CONFIG.name}`,
    openGraphDescription: 'The story behind Teddy And Kitty’s image-first, human-paced platform.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['about', 'galleries', 'profiles', 'Teddy And Kitty', ...SITE_CONFIG.seo.keywords],
  })
}

export default function AboutPage() {
  return (
    <div className="site-page">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <img
            src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="absolute inset-0 h-full min-h-[280px] w-full object-cover md:min-h-[320px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/95 via-[#1b4332]/72 to-[#1b4332]/40" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a373]">About the studio</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              A quieter corner of the internet for people who live through pictures.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90">
              {SITE_CONFIG.name} pairs generous galleries with boutique profiles—same forest, gold, and cream language from the first pixel so
              visitors never wonder where they landed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
                <Link href="/contact">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-md border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/15"
              >
                <Link href="/images">Browse galleries</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            {pillars.map((item) => (
              <Card key={item.title} className="border-border bg-card shadow-sm">
                <CardContent className="p-6 sm:p-7">
                  <item.icon className="h-8 w-8 text-[#b8894a]" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="rounded-lg border border-border bg-muted/25 p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8894a]">
                <Palette className="h-4 w-4" />
                How we design
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">One palette, many surfaces.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Whether you land on Galleries, Profiles, Help, or Community, the components echo the homepage: rounded cards, restrained borders,
                and gold reserved for the actions that move you forward.
              </p>
              <ul className="mt-8 space-y-4">
                {craft.map((row) => (
                  <li key={row.title} className="flex gap-3 border-b border-border/60 pb-4 last:border-0 last:pb-0">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#d4a373]" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold text-foreground">{row.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{row.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border border-[#1b4332]/15 bg-[#1b4332] text-[#f9f7f2] shadow-md">
              <CardContent className="p-8">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#d4a373]">
                  <Shield className="h-4 w-4" />
                  Safety & care
                </div>
                <h3 className="mt-3 text-xl font-semibold">Humans in the loop.</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">
                  We review sensitive reports manually, keep moderation notes in plain language, and steer creators toward Help Center articles instead
                  of opaque policy PDFs.
                </p>
                <Button asChild className="mt-6 rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
                  <Link href="/help">Visit Help Center</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 rounded-lg border border-border bg-card p-8 text-center shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#b8894a]">Next step</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Tell us what you are building.</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Press, partnerships, rescue networks, or solo creators—we read every message and route it thoughtfully.
            </p>
            <Button asChild className="mt-6 rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
              <Link href="/contact">Open the inbox</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
