export type Category = 'token' | 'stocks' | 'stable'

export interface IssuanceData {
  id: string
  name?: string
  category: Category
  rate: number
}
