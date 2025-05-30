import { DictClientSetup } from "@/components/get-dict"
import { Footer } from "@/components/layout/footer"
import { getDictionary, Locale, locales } from "@/lib/dictionaries"
import { BASE_URL } from "@/utils/contants"
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
				...Object.fromEntries(locales.map((locale) => [locale, BASE_URL + "/" + locale])),
				"x-default": BASE_URL + "/en",
			},
		},
	}
}

export async function generateStaticParams() {
	return locales.map((locale) => ({ lang: locale }))
}

export interface LayoutProps {
	children: React.ReactNode
	params: Promise<{ lang: Locale }>
}

export default async function RootLayout({ children, params }: LayoutProps) {
	const lang = (await params).lang
	const dict = await getDictionary(lang)

	const routes = [
		{
			href: "#hero",
			label: dict?.header?.home,
		},
		{
			href: "#about",
			label: dict?.header?.about,
		},
		{
			href: "#services",
			label: dict?.header?.services,
		},
		{
			href: "#contact",
			label: dict?.header?.contact,
		},
	]

	return (
		<html lang={lang}>
			<body>
				<DictClientSetup />
				{children}
				<Footer locale={lang} />
			</body>
		</html>
	)
}
