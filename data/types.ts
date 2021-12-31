export type Category = 'l1' | 'app' | 'stable'

export interface IssuanceData {
  id: string
  name?: string
  category: Category
  sevenDayMA: number
}
