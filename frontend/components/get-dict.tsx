"use client"

import { getDictionary, Locale, locales } from "@/lib/dictionaries"
import { RootState, store } from "@/store"
import { setDict } from "@/store/slices/dict"
import { useParams } from "next/navigation"
import React from "react"
import { Provider, useDispatch, useSelector } from "react-redux"

export const DictClientSetup = () => (
	<Provider store={store}>
		<GetDict />
	</Provider>
)

export const GetDict = () => {
	const [lang, setLang] = React.useState<Locale | null>(null)
	const params = useParams()
	const dispatch = useDispatch()
	const dict = useSelector((state: RootState) => state.dict)

	React.useEffect(() => {
		process.env.NODE_ENV === "development" && console.log(dict)
	}, [dict])

	React.useEffect(() => {
		const lang = (Array.isArray(params.lang) ? params.lang[0] || "en" : params.lang || "en") as Locale
		setLang(lang)
	}, [params.lang])

	React.useEffect(() => {
		if (!lang) return
		if (!locales.includes(lang)) return
		getDictionary(lang).then((dict) => dispatch(setDict(dict)))
	}, [lang])

	return null
}
