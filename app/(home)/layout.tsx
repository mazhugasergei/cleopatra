import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-7xl px-4">
			<Header />
			{children}
			<Footer />
		</div>
	)
}
