import { SetDictClient } from "@/components/get-dict/client"
import { Footer } from "@/components/layout/footer"
import { BASE_URL, LOCALES } from "@/lib/constants"
import { getDictionary } from "@/lib/dictionaries"
import type { Locale } from "@/lib/types"
import type { Metadata } from "next"
import "../globals.css"

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
	const lang = (await params).lang
	const dict = await getDictionary(lang)

	return {
		title: dict.metadata.title,
		description: dict.metadata.description,
		keywords: dict.metadata.keywords,
		openGraph: {
			title: dict.metadata.title,
			description: dict.metadata.description,
			images: [{ url: dict.metadata.ogImage, width: 1200, height: 630, alt: "Cleopatra Trading Co." }],
		},
		alternates: {
			languages: {
				...Object.fromEntries(LOCALES.map((locale) => [locale, BASE_URL + "/" + locale])),
				"x-default": BASE_URL + "/en",
			},
		},
	}
}

export async function generateStaticParams() {
	return LOCALES.map((locale) => ({ lang: locale }))
}

export interface LayoutProps {
	children: React.ReactNode
	params: Promise<{ lang: Locale }>
}

export default async function RootLayout({ children, params }: LayoutProps) {
	const lang = (await params).lang

	return (
		<html lang={lang}>
			<body>
				<SetDictClient />
				{children}
				<Footer locale={lang} />
			</body>
		</html>
	)
}
