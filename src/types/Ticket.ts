type TPrice = {
  full: number
  discount: number
}

type TRating = {
  reviewsCount: number
  value: number
}

type TTicket = {
  id: string
  name: string
  location: string
  image: string
  description: string
  price: TPrice
  rating: TRating
  createdAt: string
  updatedAt: string
}

export type { TTicket, TPrice, TRating }
