import { headingFont } from "@/fonts"
import { cn } from "@/helpers/tailwind"
import { preventWidowWord } from "@/helpers/text"
import { DictionaryProps } from "@/lib/dictionaries"
import cars from "@/public/cars.jpg"
import containers from "@/public/containers.jpg"
import parts from "@/public/parts.jpg"
import Image, { StaticImageData } from "next/image"
import React from "react"
import { SectionHeader } from "../layout/section-header"

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	ref?: React.Ref<HTMLDivElement>
	routes: { href: string; label: string }[]
}

export const Services = ({ dict, routes, className, ...props }: ServicesProps) => {
	const services: {
		title: string
		description: string
		image?: StaticImageData
	}[] = [
		{
			title: dict?.services?.items[0].title ?? "",
			description: dict?.services?.items[0].description ?? "",
			image: cars,
		},
		{
			title: dict?.services?.items[1].title ?? "",
			description: dict?.services?.items[1].description ?? "",
			image: parts,
		},
		{
			title: dict?.services?.items[2].title ?? "",
			description: dict?.services?.items[2].description ?? "",
			image: containers,
		},
	]

	return (
		<section
			id="services"
			data-test="services"
			className={cn("bg-primary text-primary-foreground", className)}
			{...props}
		>
			<SectionHeader backLink="#about" title="Our services" className="bg-inherit" routes={routes} />
			<h2
				className={cn(
					headingFont.className,
					"mt-6 text-center text-4xl font-bold sm:text-6xl md:mt-12 md:text-7xl lg:text-9xl"
				)}
			>
				{dict?.services?.heading}
			</h2>
			<div className="wrapper grid grid-cols-1 gap-4 py-8 md:grid-cols-2 md:py-12">
				{services.map(({ title, description, image }, index) => {
					const lastAndOdd = index === services.length - 1 && services.length % 2

					return (
						<div
							key={`service-${index}`}
							className={cn("bg-secondary-foreground relative isolate", lastAndOdd && "md:col-span-2")}
						>
							{image && (
								<Image
									src={image}
									alt=""
									width={lastAndOdd ? 2000 : 1000}
									height={1000}
									placeholder="blur"
									className="absolute z-[-1] h-full w-full object-cover"
								/>
							)}
							<div
								className={cn(
									"flex flex-col justify-end space-y-2 bg-black/50 p-4 sm:aspect-[16/9]",
									lastAndOdd && "md:aspect-[32/9]"
								)}
							>
								<h3 className="text-xl lg:text-2xl xl:text-3xl">{title}</h3>
								<p className={cn("max-lg:text-sm", lastAndOdd && "md:text-balance")}>{preventWidowWord(description)}</p>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
