import { configureStore } from "@reduxjs/toolkit"
import { dict } from "./slices/dict"

export const store = configureStore({
	reducer: {
		dict,
	},
})
