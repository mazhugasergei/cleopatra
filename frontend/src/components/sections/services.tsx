import { headingFont } from "@/fonts"
import { DictionaryProps } from "@/lib/dictionaries"
import { cn } from "@/utils/cn"
import { BoxesIcon, CarFrontIcon, ContainerIcon } from "lucide-react"
import React from "react"
import { SectionHeader } from "../layout/section-header"

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	ref?: React.Ref<HTMLDivElement>
	routes: { href: string; label: string }[]
}

export const Services = ({ dict, routes, className, ...props }: ServicesProps) => {
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
		<section id="services" data-test="services" className={cn("", className)} {...props}>
			<SectionHeader backLink="#about" title="Our services" routes={routes} />

			<h2
				className={cn(
					headingFont.className,
					"my-6 text-center text-4xl font-bold sm:text-6xl md:my-12 md:text-7xl lg:my-16 lg:text-9xl"
				)}
			>
				{dict?.services?.heading}
			</h2>

			<div className="wrapper !max-w-3xl space-y-8 pb-8 md:pb-12">
				{services.map(({ title, description, Icon }, index) => (
					<div key={`service-${index}`} className="grid grid-cols-[auto_1fr] gap-4">
						<Icon size={40} />
						<div className="space-y-2">
							<h3 className="text-2xl font-bold">{title}</h3>
							<p>{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}
