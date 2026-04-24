'use client'

import { useState } from 'react'
import { useToast } from '@/components/ui/use-toast'

const inputClass =
  'h-12 w-full rounded-lg border border-[#1b4332]/15 bg-background px-4 text-sm text-foreground shadow-sm outline-none transition-[box-shadow,border-color] focus-visible:border-[#1b4332]/40 focus-visible:ring-2 focus-visible:ring-[#d4a373]/35'
const textareaClass =
  'min-h-[168px] w-full rounded-lg border border-[#1b4332]/15 bg-background px-4 py-3 text-sm text-foreground shadow-sm outline-none transition-[box-shadow,border-color] focus-visible:border-[#1b4332]/40 focus-visible:ring-2 focus-visible:ring-[#d4a373]/35'

export function ContactMessageForm() {
  const { toast } = useToast()
  const [pending, setPending] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setPending(true)
    await new Promise((r) => setTimeout(r, 400))
    setPending(false)
    toast({
      title: 'Message queued',
      description: 'Thanks—we read every note and reply from the same calm studio inbox.',
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Your name
        <input name="name" required className={inputClass} placeholder="Alex Morgan" autoComplete="name" />
      </label>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Email
        <input name="email" type="email" required className={inputClass} placeholder="you@example.com" autoComplete="email" />
      </label>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Topic
        <input name="topic" required className={inputClass} placeholder="Partnership, press, safety, or general…" />
      </label>
      <label className="grid gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        Message
        <textarea name="message" required className={textareaClass} placeholder="Share context, links, and what outcome you are hoping for." />
      </label>
      <button
        type="submit"
        disabled={pending}
        className="h-12 rounded-lg bg-[#1b4332] text-sm font-semibold text-[#f9f7f2] shadow-sm transition-opacity hover:bg-[#143728] disabled:opacity-60"
      >
        {pending ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
