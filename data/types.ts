export type Category = 'token' | 'stocks' | 'stable'

export interface IssuanceData {
  id: string
  name?: string
  category: Category
  sevenDayMA: number
  oneDay: number
//   bid: number
//   ask: number
}
