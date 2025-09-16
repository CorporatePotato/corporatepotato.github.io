'use client'

import { useEffect, useRef, useState } from 'react'

import { useDictionary } from '@/context/dictionary-context'

const Contact = () => {
  const dict = useDictionary()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  // Refs to inputs for prefilling
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const publicationRef = useRef<HTMLInputElement>(null)
  const messageRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    const handlePrefill = (e: CustomEvent) => {
      const reason = e.detail as string
      const messageIsEmpty = !messageRef.current?.value?.trim()

      if (!messageRef.current) return

      if (messageIsEmpty) {
        switch (reason) {
          case 'request-key':
            messageRef.current.value = 'Hi! I would like to request a Steam key for Well Keeper.'
            break
          case 'contact':
            messageRef.current.value = ''
            break
        }
      }

      messageRef.current.focus()
    }

    window.addEventListener('prefillContactForm', handlePrefill as EventListener)

    return () => {
      window.removeEventListener('prefillContactForm', handlePrefill as EventListener)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('https://formspree.io/f/xldnvkkq', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      })

      const data = await response.json()

      if (response.ok && data.ok) {
        setStatus('success')
        form.reset()
      } else {
        console.error('Formspree error:', data.error || data.message)
        setStatus('error')
      }
    } catch (error) {
      console.error('Network error:', error)
      setStatus('error')
    }
  }

  return (
    <section data-section="contact" className="sectionSpacing halfContentWidth text-center">
      <h1 id="contact">{dict.contact_title}</h1>
      <p className="p2 text-left">{dict.contact_intro}</p>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-4 text-left"
        aria-busy={status === 'sending'}
      >
        <label>
          {dict.contact_name}
          <input
            ref={nameRef}
            type="text"
            name="name"
            placeholder={dict.contact_name_placeholder}
            className="inputField"
          />
        </label>

        <label>
          {dict.contact_email + ' *'}
          <input
            ref={emailRef}
            type="email"
            name="email"
            placeholder={dict.contact_email_placeholder}
            required
            className="inputField"
          />
        </label>

        <label>
          {dict.contact_publication}
          <input
            ref={publicationRef}
            type="text"
            name="publication"
            placeholder={dict.contact_publication_placeholder}
            className="inputField"
          />
        </label>

        <label>
          {dict.contact_message + ' *'}
          <textarea
            ref={messageRef}
            name="message"
            placeholder={dict.contact_message_placeholder}
            required
            className="inputField textarea"
            rows={5}
          />
        </label>

        <button type="submit" className="button mx-auto mt-2" disabled={status === 'sending'}>
          {status === 'sending' ? dict.contact_sending : dict.contact_send}
        </button>
      </form>

      <div aria-live="polite" className="mt-4">
        {status === 'success' && <p className="text-green-600">{dict.contact_success}</p>}
        {status === 'error' && <p className="text-red-600">{dict.contact_error}</p>}
      </div>
    </section>
  )
}

export default Contact
