import type DetailLink from './DetailLink'

export default interface Option {
  id: string,
  title: string
  subtitle: string
  value: Number
  details?: DetailLink[]
}