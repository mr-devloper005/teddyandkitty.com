import { Bookmark, Building2, FileText, Image as ImageIcon } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { LoginForm } from '@/components/auth/login-form'
import { getFactoryState } from '@/design/factory/get-factory-state'
import { getProductKind } from '@/design/factory/get-product-kind'
import { LOGIN_PAGE_OVERRIDE_ENABLED, LoginPageOverride } from '@/overrides/login-page'

const sharedPanel =
  'rounded-lg border border-border bg-card p-8 shadow-sm'
const sharedAction = 'bg-primary text-primary-foreground hover:bg-primary/90'

type LoginConfig = {
  side: string
  muted: string
  bulletClass: string
  icon: typeof Building2
  title: string
  body: string
  bullets: string[]
  iconClass?: string
}

function getLoginConfig(kind: ReturnType<typeof getProductKind>): LoginConfig {
  if (kind === 'directory') {
    return {
      side: 'rounded-lg border border-border bg-muted/50 p-8',
      muted: 'text-muted-foreground',
      bulletClass: 'rounded-lg border border-border bg-background px-4 py-4 text-sm text-foreground',
      icon: Building2,
      title: 'Access your business account',
      body: 'Manage listings, verification details, contact info, and local discovery surfaces from one place.',
      bullets: ['Cleaner product-specific workflows', 'Palette matched to your directory', 'Fewer repeated admin patterns'],
    }
  }
  if (kind === 'editorial') {
    return {
      side: 'rounded-lg border border-border bg-muted/50 p-8',
      muted: 'text-muted-foreground',
      bulletClass: 'rounded-lg border border-border bg-background px-4 py-4 text-sm text-foreground',
      icon: FileText,
      title: 'Sign in to your publication workspace',
      body: 'Draft, review, and publish long-form work with the calmer reading system intact.',
      bullets: ['Issue-style rhythm', 'Typography-led workspace', 'Editorial palette preserved'],
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
      title: 'Sign in to your studio',
      body: 'Open your galleries and profile tools. Your session is stored locally on this device after a successful sign-in.',
      bullets: ['Gallery-first rhythm', 'Forest and gold interface', 'Fast, lightweight interactions'],
    }
  }
  return {
    side: 'rounded-lg border border-border bg-muted/50 p-8',
    muted: 'text-muted-foreground',
    bulletClass: 'rounded-lg border border-border bg-background px-4 py-4 text-sm text-foreground',
    icon: Bookmark,
    title: 'Open your curated collections',
    body: 'Manage saved resources, collection notes, and curator identity from a calmer workspace.',
    bullets: ['Collection-first layout', 'Warm paper surfaces', 'Curator-friendly navigation'],
  }
}

export default function LoginPage() {
  if (LOGIN_PAGE_OVERRIDE_ENABLED) {
    return <LoginPageOverride />
  }

  const { recipe } = getFactoryState()
  const productKind = getProductKind(recipe)
  const config = getLoginConfig(productKind)
  const Icon = config.icon

  return (
    <div className="site-page">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
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
            <LoginForm actionClassName={sharedAction} mutedClassName="text-muted-foreground" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
