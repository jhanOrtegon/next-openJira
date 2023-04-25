import { EntryStatus, TEntry } from '@/types'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: TEntry[] = []

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {

    newEntry: (state, { payload }: PayloadAction<TEntry>) => {
      return state = [...state, payload]
    },

    changeStatusEntry: (state, { payload }: PayloadAction<{ id: string, status: EntryStatus }>) => {
      const entry: TEntry = state.find(el => el._id === payload.id)!
      const newListEntry = state.filter(el => el._id !== payload.id)
      return state = [...newListEntry, { ...entry, status: payload.status }]
    },

    loadEntries: (state, { payload }: PayloadAction<TEntry[]>) => {
      return state = payload
    }
  },
})

export const { newEntry, loadEntries, changeStatusEntry } = entriesSlice.actions
