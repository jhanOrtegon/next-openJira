export type TEntry = {
  _id: string,
  description: string,
  createdAt: number,
  status: EntryStatus
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'