import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = {
  searchString: '',
  inputString: '',
}

type State = typeof initialState

const reducers = {
  // actions 선언

  setSearchString: (state: State, action: PayloadAction<string>) => {
    const searchString = action.payload
    return { ...state, searchString }
  },
  setInputString: (state: State, action: PayloadAction<string>) => {
    const inputString = action.payload
    return { ...state, inputString }
  },
}

const { actions, reducer } = createSlice({
  name: 'searchSlice',
  initialState,
  reducers,
})

const searchReducer = reducer

export const { setSearchString, setInputString } = actions

export default searchReducer
