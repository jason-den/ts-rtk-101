import { createSlice } from '@reduxjs/toolkit'

type FinderState = { tweets: any[] }

const finderSlice = createSlice({
  name: 'finder',
  initialState: { tweets: [] },
  reducers: {
    addTweet(state: FinderState, action) {
      state.tweets = action.payload
    }
  }
})

export const { addTweet } = finderSlice.actions
export const finderReducer = finderSlice.reducer
