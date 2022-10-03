import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SubtotalState {
  value: number
}

const initialState: SubtotalState = {
  value: 0,
}

export const subtotalSlice = createSlice({
  name: 'subtotal',
  initialState,
  reducers: {
    addAmountToSubtotal: (state, action: PayloadAction<number>) => {
      state.value += Number(action.payload)
    },
    
    removeAmountFromSubtotal: (state, action: PayloadAction<number>) => {
      state.value -= Number(action.payload)
    },
    
    resetSubtotal: (state) => {
      state.value = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAmountToSubtotal, removeAmountFromSubtotal } = subtotalSlice.actions

export default subtotalSlice.reducer