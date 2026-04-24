import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Image as ImageIcon, LifeBuoy, MessageCircle, Shield, Sparkles, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { HelpFaqSection } from '@/components/marketing/help-faq-section'
import { SITE_CONFIG } from '@/lib/site-config'
import { buildPageMetadata } from '@/lib/seo'

const helpFaqs = [
  {
    id: 'faq-galleries',
    question: 'How do I publish my first gallery?',
    answer:
      'Create an account, open Galleries from the navigation, then use the create flow to upload images, add a title, and pick a category. You can refine captions later—shipping beats perfection.',
  },
  {
    id: 'faq-profile',
    question: 'What should I put on my profile?',
    answer:
      'Lead with who you are and what you photograph. Add one outbound link, optional location, and tie your best gallery so visitors see proof immediately.',
  },
  {
    id: 'faq-community',
    question: 'How does Community differ from Galleries?',
    answer:
      'Community is for short updates, prompts, and lightweight conversation. Galleries remain the hero surface for imagery. Both share the same visual language.',
  },
  {
    id: 'faq-safety',
    question: 'How do I report something that feels unsafe?',
    answer:
      'Use Contact from the footer with the URL, approximate time, and what concerned you. We review every report and may follow up for context.',
  },
  {
    id: 'faq-account',
    question: 'I forgot my password—what now?',
    answer:
      'Use Forgot password on the login screen. If email delivery fails, contact support with the address you registered so we can verify ownership manually.',
  },
] as const

const topics = [
  {
    title: 'Getting started',
    description: 'Create an account, verify basics, and publish your first gallery or profile update in minutes.',
    icon: Sparkles,
  },
  {
    title: 'Galleries & imagery',
    description: 'Best practices for uploads, categories, and keeping large visuals fast on every device.',
    icon: ImageIcon,
  },
  {
    title: 'Profiles & trust',
    description: 'How bios, links, and discovery work together so visitors recognize you at a glance.',
    icon: User,
  },
  {
    title: 'Safety & moderation',
    description: 'Reporting, boundaries, and how we think about kind spaces for people and pets.',
    icon: Shield,
  },
]

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata({
    path: '/help',
    title: `Help Center | ${SITE_CONFIG.name}`,
    description:
      'Guides and answers for Teddy And Kitty—galleries, profiles, community updates, and account help in one calm, forest-and-gold layout.',
    openGraphTitle: `Help Center | ${SITE_CONFIG.name}`,
    openGraphDescription:
      'Everything you need to publish, discover, and stay safe on Teddy And Kitty—same warm visual language as the homepage.',
    image: SITE_CONFIG.defaultOgImage,
    keywords: ['help', 'support', 'galleries', 'profiles', 'Teddy And Kitty', ...SITE_CONFIG.seo.keywords],
  })
}

export default function HelpPage() {
  return (
    <div className="site-page">
      <NavbarShell />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2000&q=80"
            alt=""
            className="absolute inset-0 h-full min-h-[280px] w-full object-cover md:min-h-[320px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1b4332]/95 via-[#1b4332]/75 to-[#1b4332]/45" aria-hidden />
          <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d4a373]">Help Center</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-[-0.04em] text-white md:text-5xl">
              Answers that feel as considered as the product.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90">
              Forest headings, cream panels, and gold actions mirror the homepage so help never feels like a separate product bolted on the side.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
                <Link href="/contact">
                  Contact support
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((topic) => (
              <Card key={topic.title} className="border-border bg-card shadow-sm transition-transform hover:-translate-y-0.5">
                <CardContent className="p-6">
                  <topic.icon className="h-8 w-8 text-[#b8894a]" aria-hidden />
                  <h2 className="mt-4 text-lg font-semibold text-foreground">{topic.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
            <div className="rounded-lg border border-border bg-muted/25 p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b8894a]">
                <BookOpen className="h-4 w-4" />
                Playbooks
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-foreground">Start with intent, not noise.</h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Publish once, polish later.</strong> Ship a gallery with five strong images rather than
                    thirty rushed frames—visitors remember quality.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Link profiles and posts.</strong> Cross-link so people can jump between your story and
                    your visuals without hunting.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden />
                  <span>
                    <strong className="text-foreground">Lean on Community + Help.</strong> Ask in the open when you want perspective; open a
                    private ticket when you need staff eyes.
                  </span>
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                <Link href="/community" className="text-foreground underline-offset-4 hover:underline">
                  Visit Community
                </Link>
                <span className="text-muted-foreground">·</span>
                <Link href="/developers" className="text-foreground underline-offset-4 hover:underline">
                  Developer docs
                </Link>
              </div>
            </div>

            <Card className="border-border bg-card shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-2">
                  <LifeBuoy className="h-5 w-5 text-[#b8894a]" />
                  <h3 className="text-lg font-semibold text-foreground">Frequently asked questions</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">Straight answers—expand any row for detail.</p>
                <div className="mt-6">
                  <HelpFaqSection faqs={[...helpFaqs]} />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 rounded-lg border border-border bg-[#1b4332] px-6 py-10 text-center sm:px-10">
            <MessageCircle className="mx-auto h-10 w-10 text-[#d4a373]" aria-hidden />
            <h2 className="mt-4 text-2xl font-semibold text-white">Still stuck?</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/85">
              Tell us what you tried and what you expected—we read every message and route it to the right human.
            </p>
            <Button asChild className="mt-6 rounded-md bg-[#d4a373] font-semibold text-[#1b4332] hover:bg-[#c49263]">
              <Link href="/contact">Open a conversation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
