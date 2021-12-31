export type Category = 'l1' | 'app' | 'l2' | 'stable'

export interface IssuanceData {
  id: string
  name?: string
  category: Category
  sevenDayMA: number
  oneDay: number
//   bid: number
//   ask: number
}
