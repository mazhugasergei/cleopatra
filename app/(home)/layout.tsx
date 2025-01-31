import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="mx-auto max-w-[86rem] px-4">
			<Header />
			{children}
			<Footer />
		</div>
	)
}
