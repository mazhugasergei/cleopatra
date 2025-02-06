import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header className="fixed top-0 right-0 left-0 z-50" />
			{children}
			<Footer />
		</>
	)
}
