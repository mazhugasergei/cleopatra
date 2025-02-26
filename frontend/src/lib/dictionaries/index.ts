// import "server-only"
import en from "./en.json"
import ru from "./ru.json"

export interface DictionaryProps {
	dict: {
		[key: string]: string | any
	}
}

export type Locale = "en" | "ru"

export const locales: Locale[] = ["en", "ru"]
const dictionaries = { en, ru }
export const getDictionary = async (locale: Locale): Promise<{ [key: string]: any }> => dictionaries[locale]
