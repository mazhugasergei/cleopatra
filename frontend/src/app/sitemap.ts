import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = "https://www.cleopatrading.com"
	const locales = ["en", "ru"]
	const pages = ["", "about", "services", "contact"]

	const urls: MetadataRoute.Sitemap = []

	// Root url without locale
	urls.push({
		url: baseUrl,
		lastModified: new Date(),
		changeFrequency: "monthly",
		priority: 1,
	})

	// Localized pages
	locales.forEach((locale) => {
		pages.forEach((page) => {
			const path = page ? `/${locale}/${page}` : `/${locale}`
			urls.push({
				url: baseUrl + path,
				lastModified: new Date(),
				changeFrequency: "monthly",
				priority: 0.8,
			})
		})
	})

	return urls
}
