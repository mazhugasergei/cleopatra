import { SectionHeader } from "@/components/layout/section-header"
import { Logo } from "@/components/logo"
import { headingFont } from "@/fonts"
import { DictionaryProps } from "@/lib/dictionaries"
import { cn } from "@/utils/cn"
import { preventWidowWord } from "@/utils/text"
import { BoxesIcon, CarFrontIcon, ContainerIcon } from "lucide-react"
import React from "react"

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	routes: { href: string; label: string }[]
}

export const Services = ({ dict, routes, ...props }: ServicesProps) => {
	const services = [
		{
			title: dict?.services?.items[0].title ?? "",
			description: dict?.services?.items[0].description ?? "",
			Icon: CarFrontIcon,
		},
		{
			title: dict?.services?.items[1].title ?? "",
			description: dict?.services?.items[1].description ?? "",
			Icon: BoxesIcon,
		},
		{
			title: dict?.services?.items[2].title ?? "",
			description: dict?.services?.items[2].description ?? "",
			Icon: ContainerIcon,
		},
	]

	return (
		<section id="services" data-test="services" {...props}>
			<SectionHeader backLink="#about" title="Our services" routes={routes} />

			<div className="my-10 space-y-2 text-center md:my-16 lg:my-18">
				<h2 className={cn(headingFont.className, "text-4xl font-bold sm:text-6xl md:text-7xl lg:text-9xl")}>
					{dict?.services?.heading}
				</h2>
				<Logo full />
			</div>

			<div className="wrapper !max-w-4xl space-y-8 pb-8 md:pb-12">
				{services.map(({ title, description, Icon }, index) => (
					<div key={`service-${index}`} className="grid grid-cols-[auto_1fr] gap-4">
						<Icon size={40} />
						<div className="space-y-2">
							<h3 className="text-2xl font-bold">{preventWidowWord(title)}</h3>
							<p>{preventWidowWord(description)}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
