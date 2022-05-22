import { combineReducers, configureStore } from '@reduxjs/toolkit'
import searchReducer from './slice'

const store = configureStore({ reducer: combineReducers({ searchReducer }) })

type RootState = ReturnType<typeof store.getState>

export type { RootState }
export default store
