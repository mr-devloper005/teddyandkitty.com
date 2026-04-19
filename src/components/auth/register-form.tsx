'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'

type RegisterFormProps = {
  actionClassName: string
  mutedClassName: string
}

export function RegisterForm({ actionClassName, mutedClassName }: RegisterFormProps) {
  const router = useRouter()
  const { signup, isLoading } = useAuth()
  const { toast } = useToast()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputClass =
    'h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground shadow-sm outline-none transition-[box-shadow,border-color] focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !password.trim()) {
      toast({
        title: 'Almost there',
        description: 'Add your name, email, and password to create your account.',
        variant: 'destructive',
      })
      return
    }
    try {
      await signup(name.trim(), email.trim(), password)
      toast({ title: 'Welcome aboard', description: 'You are signed in and saved on this device.' })
      router.push('/')
      router.refresh()
    } catch {
      toast({
        title: 'Could not register',
        description: 'Try again in a moment.',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Create account</p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
        <label className="grid gap-1.5 text-sm font-medium text-foreground">
          Full name
          <input
            className={inputClass}
            name="name"
            autoComplete="name"
            placeholder="Alex Morgan"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-foreground">
          Email
          <input
            className={inputClass}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium text-foreground">
          Password
          <input
            className={inputClass}
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="••••••••"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
        </label>
        <button
          type="submit"
          disabled={isLoading}
          className={`inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold transition-opacity disabled:opacity-60 ${actionClassName}`}
        >
          {isLoading ? 'Creating…' : 'Create account'}
        </button>
      </form>
      <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 text-sm ${mutedClassName}`}>
        <span>Already have an account?</span>
        <Link href="/login" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          <Sparkles className="h-4 w-4" />
          Sign in
        </Link>
      </div>
    </>
  )
}
