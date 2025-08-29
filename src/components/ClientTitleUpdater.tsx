// components/ClientTitleUpdater.tsx
'use client'

import { useEffect } from 'react'

import { useTranslation } from '@/hooks/useTranslation'

interface ClientTitleUpdaterProps {
  pageTitle?: string // Optional page-specific title
}

// TODO: Fex this component maybe?
export default function ClientTitleUpdater({ pageTitle }: ClientTitleUpdaterProps) {
  const { t, loading } = useTranslation()

  useEffect(() => {
    if (loading) return

    const titleDefault = t('metadata_titleDefault') || 'GameName'
    const titleTemplate = t('metadata_titleTemplate') || 'Press Kit'
    
    let newTitle = titleDefault
    
    if (pageTitle) {
      newTitle = `${pageTitle} | ${titleTemplate}`
    }
    
    // Only update if the translation actually worked (not returning the key)
    if (newTitle !== 'metadata_titleDefault' && newTitle !== pageTitle) {
      document.title = newTitle
    }
  }, [t, loading, pageTitle])

  return null // This component doesn't render anything
}