"use client"

import { DEFAULT_LOCALE, LOCALES } from "@/lib/constants"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/types"
import { store } from "@/store"
import { setDict } from "@/store/slices/dict"
import { useParams } from "next/navigation"
import React from "react"
import { Provider, useDispatch } from "react-redux"

export const SetDictClient = () => (
	<Provider store={store}>
		<GetDictClient />
	</Provider>
)

export const GetDictClient = () => {
	const params = useParams()
	const dispatch = useDispatch()

	React.useEffect(() => {
		const lang = (
			Array.isArray(params.lang) ? params.lang[0] || DEFAULT_LOCALE : params.lang || DEFAULT_LOCALE
		) as Locale
		if (!LOCALES.includes(lang)) return
		getDictionary(lang).then((dict) => dispatch(setDict(dict)))
	}, [params.lang])

	return null
}
