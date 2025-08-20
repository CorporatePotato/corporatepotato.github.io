'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function StartPage() {
  const router = useRouter()

  useEffect(() => {
    router.replace('/wellkeeper')
  }, [router])

  return (
    <>
      <main className="page">
        <div className="h-screen flex flex-col items-center justify-center">
          <Image
            alt="Corporate Potato logo"
            src="/assets/CorporatePotato_Logo_Horizontal_White.png"
            className="block h-12 w-auto sm:h-8"
            width={300}
            height={60}
          />
        </div>
      </main>
    </>
  )
}