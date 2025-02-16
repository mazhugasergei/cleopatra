import { configureStore } from "@reduxjs/toolkit"
import { dictReducer } from "./slices/dict"

export const store = configureStore({
	reducer: {
		dict: dictReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
