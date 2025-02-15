import "server-only"

export interface DictionaryProps {
	dict: {
		[key: string]: string | any
	}
}

export type Locale = "en" | "ru"

const dictionaries = {
	en: () => import("./en.json").then((module) => module.default),
	ru: () => import("./ru.json").then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "ru"): Promise<{ [key: string]: any }> => dictionaries[locale]()
