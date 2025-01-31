import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"

export default function Home() {
	return (
		<main className="px-4">
			<Hero />
			<About />
			<Services />
			<Contact />
		</main>
	)
}
