export interface Artwork {
  id: string
  title: string
  description: string
  image: string
  year: number
  medium: string
  dimensions: string
  price?: string
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Ethereal Landscape',
    description: 'A contemplative piece exploring the interplay of light and shadow in natural environments.',
    image: '/images/DSC_0536.jpg',
    year: 2024,
    medium: 'Oil on Canvas',
    dimensions: '100 x 80 cm',
    price: '$2,500',
  },
  {
    id: '2',
    title: 'Sunset Waters',
    description: 'Abstract representation of light reflecting on open water at dusk.',
    image: '/images/DSC_0537.jpg',
    year: 2024,
    medium: 'Oil on Canvas',
    dimensions: '120 x 90 cm',
    price: '$1,800',
  },
  {
    id: '3',
    title: 'Dramatic Falls',
    description: 'A vivid portrayal of cascading water beneath a stormy sky.',
    image: '/images/DSC_0538.jpg',
    year: 2023,
    medium: 'Oil on Canvas',
    dimensions: '80 x 80 cm',
  },
  {
    id: '4',
    title: 'Cascade',
    description: 'Waterfalls rendered in rich, luminous color.',
    image: '/images/DSC_0539.jpg',
    year: 2024,
    medium: 'Oil on Canvas',
    dimensions: '60 x 45 cm',
    price: '$800',
  },
  {
    id: '5',
    title: 'Storm Column',
    description: 'A dramatic monochromatic study of turbulent skies and raw energy.',
    image: '/images/DSC_0543.jpg',
    year: 2023,
    medium: 'Oil on Canvas',
    dimensions: '150 x 100 cm',
    price: '$3,200',
  },
  {
    id: '6',
    title: 'Cloud Study',
    description: 'Soft, swirling clouds captured in muted tones.',
    image: '/images/DSC_0544.jpg',
    year: 2024,
    medium: 'Oil on Canvas',
    dimensions: '50 x 70 cm',
    price: '$1,200',
  },
  {
    id: '7',
    title: 'Twilight Shore',
    description: 'A coastal scene bathed in the last light of day.',
    image: '/images/DSC_0548.jpg',
    year: 2023,
    medium: 'Oil on Canvas',
    dimensions: '100 x 70 cm',
    price: '$2,000',
  },
  {
    id: '8',
    title: 'Twilight Shore II',
    description: 'A second take on the evening coastline, richer in contrast.',
    image: '/images/DSC_0548-2.jpg',
    year: 2023,
    medium: 'Oil on Canvas',
    dimensions: '100 x 70 cm',
    price: '$2,000',
  },
  {
    id: '9',
    title: 'Aurora',
    description: 'The northern lights dance over a still landscape in brilliant blue and green.',
    image: '/images/DSC_0551.jpg',
    year: 2022,
    medium: 'Oil on Canvas',
    dimensions: '120 x 80 cm',
    price: '$2,800',
  },
  {
    id: '10',
    title: 'Aurora II',
    description: 'A companion piece to Aurora, exploring deeper hues of the polar sky.',
    image: '/images/DSC_0551-2.jpg',
    year: 2022,
    medium: 'Oil on Canvas',
    dimensions: '120 x 80 cm',
    price: '$2,800',
  },
  {
    id: '11',
    title: 'Misty Peak',
    description: 'A mountain rises through lavender mist in this ethereal landscape.',
    image: '/images/IMG_2053.jpg',
    year: 2022,
    medium: 'Oil on Canvas',
    dimensions: '90 x 70 cm',
    price: '$1,600',
  },
]