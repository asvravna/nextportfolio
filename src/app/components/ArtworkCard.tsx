import Link from 'next/link'
import Image from 'next/image'
import type { Artwork } from '@/app/data/artworks'

interface ArtworkCardProps {
  artwork: Artwork
}

export default function ArtworkCard({ artwork }: ArtworkCardProps) {
  return (
    <Link href={`/artwork/${artwork.id}`}>
      <div className="group cursor-pointer">
        <div className="relative h-80 overflow-hidden bg-stone-100 mb-4">
          <Image
            src={artwork.image}
            alt={artwork.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <h3 className="text-xl font-serif mb-1 text-stone-800 group-hover:text-stone-500 transition-colors">
          {artwork.title}
        </h3>
        <p className="text-sm text-stone-400 tracking-wide">
          {artwork.year} · {artwork.medium}
        </p>
      </div>
    </Link>
  )
}