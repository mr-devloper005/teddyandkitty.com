import { Bookmark, Building2, FileText, Image as ImageIcon } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { RegisterForm } from '@/components/auth/register-form'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'

const sharedPanel = 'rounded-lg border border-border bg-card p-8 shadow-sm'
const sharedAction = 'bg-primary text-primary-foreground hover:bg-primary/90'

type RegisterConfig = {
  side: string
  muted: string
  bulletClass: string
  icon: typeof Building2
  title: string
  body: string
  bullets: string[]
  iconClass?: string
}

function getRegisterConfig(kind: ReturnType<typeof getProductKind>): RegisterConfig {
  if (kind === 'directory') {
    return {
      side: 'rounded-lg border border-border bg-muted/50 p-8',
      muted: 'text-muted-foreground',
      bulletClass: 'rounded-lg border border-border bg-background px-4 py-4 text-sm text-foreground',
      icon: Building2,
      title: 'Create a business-ready account',
      body: 'List services, manage locations, and activate trust signals with a proper directory workflow.',
      bullets: ['Verification-ready fields', 'Directory-native palette', 'Faster onboarding paths'],
    }
  }
  if (kind === 'editorial') {
    return {
      side: 'rounded-lg border border-border bg-muted/50 p-8',
      muted: 'text-muted-foreground',
      bulletClass: 'rounded-lg border border-border bg-background px-4 py-4 text-sm text-foreground',
      icon: FileText,
      title: 'Start your contributor workspace',
      body: 'Create a profile for essays, issue drafts, editorial review, and publication scheduling.',
      bullets: ['Publication rhythm', 'Desk-style surfaces', 'Reading-first tone'],
    }
  }
  if (kind === 'visual') {
    return {
      side: 'rounded-lg border border-primary/25 bg-primary p-8 text-primary-foreground shadow-md',
      muted: 'text-primary-foreground/85',
      bulletClass:
        'rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-4 text-sm text-primary-foreground',
      icon: ImageIcon,
      iconClass: 'text-primary-foreground',
      title: 'Create your creator account',
      body: 'Join with galleries and profiles in mind. After you register, you stay signed in on this device.',
      bullets: ['Image-led onboarding', 'Profile-ready identity fields', 'Local session for quick return visits'],
    }
  }
  return {
    side: 'rounded-lg border border-border bg-muted/50 p-8',
    muted: 'text-muted-foreground',
    bulletClass: 'rounded-lg border border-border bg-background px-4 py-4 text-sm text-foreground',
    icon: Bookmark,
    title: 'Create a curator account',
    body: 'Build shelves, save references, and connect collections to your profile without a generic feed setup.',
    bullets: ['Collection-first layout', 'Curator-friendly cues', 'Warm library palette'],
  }
}

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getRegisterConfig(productKind)
  const Icon = config.icon

  return (
    <div className="site-page">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className={config.side}>
            <Icon className={`h-8 w-8 ${config.iconClass || 'text-foreground'}`} />
            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[inherit]">{config.title}</h1>
            <p className={`mt-5 text-sm leading-8 ${config.muted}`}>{config.body}</p>
            <div className="mt-8 grid gap-4">
              {config.bullets.map((item) => (
                <div key={item} className={config.bulletClass}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className={sharedPanel}>
            <RegisterForm actionClassName={sharedAction} mutedClassName="text-muted-foreground" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
