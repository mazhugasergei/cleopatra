import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"

export default function Home() {
	return (
		<main className="space-y-20 pb-20 md:space-y-32">
			<Hero />
			<About />
			<Services />
			<Contact />
		</main>
	)
}
