import { About } from "@/components/sections/about"
import { Contact } from "@/components/sections/contact"
import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { getDictionary } from "@/lib/dictionaries"

export interface HomeProps {
	params: Promise<{ lang: "en" | "ru" }>
}

export default async function Home({ params }: HomeProps) {
	const lang = (await params).lang
	const dict = await getDictionary(lang)

	return (
		<main>
			<Hero dict={dict} />
			<About dict={dict} />
			<Services dict={dict} />
			<Contact dict={dict} />
		</main>
	)
}
