import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
	title: "Cleopatra Trading Co. | Cars & Spare Parts Delivered Worldwide",
	description:
		"Cleopatra Trading Co. specializes in sourcing, dismantling, and shipping high-quality cars and spare parts worldwide. Based in South Korea, we offer expert vehicle selection, professional disassembly, and secure global shipping. Trusted by customers worldwide for reliable service and multilingual support.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
