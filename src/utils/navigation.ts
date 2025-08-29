import { NavItem } from '@/types/navigation'

export const navigationItems: NavItem[] = [
  { key: 'nav_features', href: '#features' },
  { key: 'nav_trailer', href: '#trailer' },
  { key: 'nav_factSheet', href: '#fact-sheet' },
  { key: 'nav_mediaKit', href: '#media-kit' },
  { key: 'nav_requestKey', href: '#contact' },
  { key: 'nav_contact', href: '#contact' },
  { key: 'nav_about', href: '#about' }
]

// Custom handler for nav item clicks that need prefill
export const handlePrefillClick = (reason: 'request-key' | 'contact') => {
  window.dispatchEvent(new CustomEvent('prefillContactForm', { detail: reason }))
  // Smooth scroll to contact section
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
}
