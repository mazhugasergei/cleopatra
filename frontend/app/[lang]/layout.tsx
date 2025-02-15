import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { getDictionary, Locale } from "@/lib/dictionaries"
import { locales } from "@/middleware"
import type { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
	title: "Cleopatra Trading Co. | Cars & Spare Parts Delivered Worldwide",
	description:
		"Cleopatra Trading Co. specializes in sourcing, dismantling, and shipping high-quality cars and spare parts worldwide. Based in South Korea, we offer expert vehicle selection, professional disassembly, and secure global shipping. Trusted by customers worldwide for reliable service and multilingual support.",
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

	return (
		<html lang={(await params).lang}>
			<body>
				<Header dict={dict} />
				{children}
				<Footer />
			</body>
		</html>
	)
}
