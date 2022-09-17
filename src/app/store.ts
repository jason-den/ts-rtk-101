import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { finderReducer } from '../features/finder/finderSlice'
import { numberOfResultsReducer } from '../features/numberOfResults/numberOfResultsSlice'
export const store = configureStore({
  reducer: {
    finder: finderReducer,
    numberOfResults: numberOfResultsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
