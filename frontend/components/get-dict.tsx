"use client"

import { getDictionary, Locale } from "@/lib/dictionaries"
import { locales } from "@/middleware"
import { setDict } from "@/store/slices/dict"
import { useParams } from "next/navigation"
import React from "react"
import { useDispatch } from "react-redux"

export const GetDict = () => {
	const params = useParams()
	const lang = (Array.isArray(params.lang) ? params.lang[0] : params.lang) as Locale
	const dispatch = useDispatch()

	React.useEffect(() => {
		if (!lang) return
		if (!locales.includes(lang)) return
		getDictionary(lang).then((dict) => dispatch(setDict(dict)))
	}, [])
}
