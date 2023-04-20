import { TEntry } from '@/types'
import { getUid } from '@/utils'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState: TEntry[] = []

export const entriesSlice = createSlice({
  name: 'entries',
  initialState,
  reducers: {
    
    newEntry: (state, {payload}: PayloadAction<TEntry>) => {
      state.push(payload)
    },
  },
})

export const { newEntry} = entriesSlice.actions
