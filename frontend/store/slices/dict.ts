import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const slice = createSlice({
	name: "dict",
	initialState,
	reducers: {
		setDict(state, action) {
			return {
				...state,
				...action.payload,
			}
		},
	},
})

export const { setDict } = slice.actions
export const dict = slice.reducer
