'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Sparkles } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { useToast } from '@/components/ui/use-toast'

type LoginFormProps = {
  actionClassName: string
  mutedClassName: string
}

export function LoginForm({ actionClassName, mutedClassName }: LoginFormProps) {
  const router = useRouter()
  const { login, isLoading } = useAuth()
  const { toast } = useToast()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const inputClass =
    'h-12 rounded-lg border border-input bg-background px-4 text-sm text-foreground shadow-sm outline-none transition-[box-shadow,border-color] focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) {
      toast({
        title: 'Missing details',
        description: 'Enter your email and password to continue.',
        variant: 'destructive',
      })
      return
    }
    try {
      await login(email.trim(), password)
      toast({ title: 'Signed in', description: 'Your session is saved on this device.' })
      router.push('/')
      router.refresh()
    } catch {
      toast({
        title: 'Sign-in failed',
        description: 'Check your details and try again.',
        variant: 'destructive',
      })
    }
  }

  return (
    <>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">Welcome back</p>
      <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
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
            autoComplete="current-password"
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
          {isLoading ? 'Signing in…' : 'Sign in'}
        </button>
      </form>
      <div className={`mt-6 flex flex-wrap items-center justify-between gap-3 text-sm ${mutedClassName}`}>
        <Link href="/forgot-password" className="hover:underline">
          Forgot password?
        </Link>
        <Link href="/register" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          <Sparkles className="h-4 w-4" />
          Create account
        </Link>
      </div>
    </>
  )
}
