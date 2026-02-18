import Image from "next/image"

type Props = {
  src: string
  alt: string
  children?: React.ReactNode
}

export default function ArtworkHero({ src, alt, children }: Props) {
  return (
    <section className="relative h-[80vh] w-full">
      <Image src={src} alt={alt} fill className="object-cover" priority />

      {/* light overlay for readability */}
      <div className="absolute inset-0 bg-white/65 backdrop-blur-[2px]" />

      <div className="relative z-10 flex h-full items-center justify-center text-center px-6">
        <div className="max-w-2xl">{children}</div>
      </div>
    </section>
  )
}
