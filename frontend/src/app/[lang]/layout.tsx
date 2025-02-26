import { DictClientSetup } from "@/components/get-dict"
import { Footer } from "@/components/layout/footer"
import { getDictionary, Locale, locales } from "@/lib/dictionaries"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
	title: "Cleopatra Trading Co. | Cars & Spare Parts Delivered Worldwide",
	description:
		"Sourcing and shipping high-quality cars and spare parts worldwide. Trusted by customers for reliable service and multilingual support.",
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
			href: "#",
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
