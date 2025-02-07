import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
