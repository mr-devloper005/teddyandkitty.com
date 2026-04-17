import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Image as ImageIcon, Mail, MapPin, MessageCircle, Sparkles } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ContactMessageForm } from '@/components/marketing/contact-message-form'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'
import { CONTACT_PAGE_OVERRIDE_ENABLED, ContactPageOverride } from '@/overrides/contact-page'

const lanes = [
  {
    icon: ImageIcon,
    title: 'Creators & galleries',
    body: 'Launch help, licensing questions, and collaboration ideas for visual campaigns or rescue storytelling.',
  },
  {
    icon: Sparkles,
    title: 'Partners & press',
    body: 'Deck requests, sponsorship pacing, and editorial features—we answer with timelines, not auto-replies.',
  },
  {
    icon: MapPin,
    title: 'Safety & trust',
    body: 'Report URLs, approximate times, and what felt off. We escalate with care and follow up when we need more context.',
  },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/contact',
    title: `Contact us | ${SITE_CONFIG.name}`,
    description:
      'Reach the Teddy And Kitty studio—galleries, profiles, partnerships, and safety—in the same forest, cream, and gold experience as the rest of the site.',
    openGraphTitle: `Contact us | ${SITE_CONFIG.name}`,
    openGraphDescription: 'Send a message to Teddy And Kitty. We route every note to the right human.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['contact', 'support', 'Teddy And Kitty', ...SITE_CONFIG.seo.keywords],
  })
}

export default function ContactPage() {
  if (CONTACT_PAGE_OVERRIDE_ENABLED) {
    return <ContactPageOverride />
  }

  return (
    <div className="site-page">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <img
            src="https://images.unsplash.com/photo-1423663399049-161a18f8578e?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="absolute inset-0 h-full min-h-[280px] w-full object-cover md:min-h-[300px]"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#1b4332]/93 via-[#1b4332]/65 to-[#1b4332]/35" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a373]">Contact us</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              We read every message—then route it like a small studio would.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90">
              Forest overlay, gold label, white type: the same hero language as Help and Galleries so this page never feels like a bolt-on form.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
                <Link href="/help">
                  Browse Help Center
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-md border-white/35 bg-white/10 text-white backdrop-blur hover:bg-white/15"
              >
                <Link href="/images">View galleries</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.02fr] lg:items-start">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8894a]">
                <MessageCircle className="h-4 w-4" />
                Lanes we support
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Share the fullest context you can—links, screenshots, time zones. We typically respond within two business days, sooner for safety
                issues.
              </p>
              <div className="mt-8 space-y-4">
                {lanes.map((lane) => (
                  <div key={lane.title} className="rounded-lg border border-border bg-card p-5 shadow-sm">
                    <lane.icon className="h-5 w-5 text-[#b8894a]" aria-hidden />
                    <h2 className="mt-3 text-lg font-semibold text-foreground">{lane.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{lane.body}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-start gap-3 rounded-lg border border-dashed border-[#1b4332]/20 bg-muted/30 p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-[#1b4332]" aria-hidden />
                <p className="text-sm text-muted-foreground">
                  Prefer email? Use the form—your address becomes the reply-to. We do not publish your note on Community without permission.
                </p>
              </div>
            </div>

            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-[#b8894a]" />
                  <h2 className="text-xl font-semibold text-foreground">Send a message</h2>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">All fields are required so we can respond in one thread.</p>
                <div className="mt-6">
                  <ContactMessageForm />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
