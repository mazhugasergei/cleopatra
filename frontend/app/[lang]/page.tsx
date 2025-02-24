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

	const routes = [
		{
			href: "#",
			label: dict?.header?.home,
		},
		{
			href: "#about",
			label: dict?.header?.about,
		},
		{
			href: "#services",
			label: dict?.header?.services,
		},
	]

	return (
		<main>
			<Hero dict={dict} routes={routes} />
			<About dict={dict} routes={routes} />
			<Services dict={dict} routes={routes} />
			<Contact dict={dict} routes={routes} />
		</main>
	)
}
