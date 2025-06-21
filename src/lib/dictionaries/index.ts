// import "server-only"

import type { Locale } from "../types"
import en from "./en.json"
import ru from "./ru.json"

export interface DictionaryProps {
	dict: {
		[key: string]: string | any
	}
}

const dictionaries = { en, ru }
export const getDictionary = async (locale: Locale): Promise<{ [key: string]: any }> => dictionaries[locale]
