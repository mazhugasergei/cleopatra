import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-[86rem] px-4">
			<Header />
			{children}
			<Footer />
		</div>
	)
}
