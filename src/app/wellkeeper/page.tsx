import Image from 'next/image'

export default function WellKeeper() {
  return (
    <>
      <main className="page">
 <div className="h-screen flex flex-col items-center justify-center">
          <Image
            alt="Corporate Potato logo"
            src="/assets/CorporatePotato_Logo_Horizontal_White.png"
            className="block h-5 w-auto sm:h-4"
            width={300}
            height={60}
          />
          <p className="text-5xl text-center">Coming soon</p>
        </div>
      </main>
    </>
  )
}
