import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"

export default function Home() {
	return (
		<main className="space-y-20 pb-20">
			<Hero />
			<About />
			<Services />
			<Contact />
		</main>
	)
}
