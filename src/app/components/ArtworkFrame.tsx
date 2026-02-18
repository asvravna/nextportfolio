import Image from "next/image"

type Props = {
  src: string
  alt: string
  title: string
  details?: string
}

export default function ArtworkFrame({
  src,
  alt,
  title,
  details,
}: Props) {
  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="bg-white p-6 shadow-sm">
        <Image
          src={src}
          alt={alt}
          width={1400}
          height={1800}
          className="h-auto w-full object-contain"
        />
      </div>

      <div className="text-center text-sm text-gray-600">
        <p className="font-medium">{title}</p>
        {details && <p>{details}</p>}
      </div>
    </div>
  )
}
