import { headingFont } from "@/fonts"
import { cn } from "@/helpers/tailwind"
import { preventWidowWord } from "@/helpers/text"
import cars from "@/public/cars.jpg"
import containers from "@/public/containers.jpg"
import parts from "@/public/parts.jpg"
import Image from "next/image"
import React from "react"
import { SectionHeader } from "../layout/section-header"

const services = [
	{
		title: "Cars selection",
		description:
			"We offer a wide range of vehicles, including Korean, German, American, and other top-brand cars. Whether you're looking for a new, used, or salvaged vehicle, we source the best options to meet your needs and budget.",
		image: cars,
	},
	{
		title: "Spare parts selection",
		description:
			"We provide a wide range of high-quality spare parts for Korean, German, American, and other top-brand vehicles. Our team carefully selects and supplies reliable parts to meet your needs, ensuring quality, durability, and worldwide delivery.",
		image: parts,
	},
	{
		title: "Container loading & shipping",
		description:
			"We specialize in secure container loading and worldwide shipping. Our team ensures that vehicles and parts are packed efficiently, minimizing damage and maximizing space. We handle all logistics, ensuring smooth and timely delivery to your destination.",
		image: containers,
	},
]

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Services = ({ className, ...props }: ServicesProps) => {
	return (
		<section
			id="services"
			data-test="services"
			className={cn("bg-primary text-primary-foreground", className)}
			{...props}
		>
			<SectionHeader backLink="#about" title="Our services" className="bg-inherit" />
			<h2
				className={cn(
					headingFont.className,
					"mt-6 text-center text-4xl font-bold sm:text-6xl md:mt-12 md:text-7xl lg:text-9xl"
				)}
			>
				Our services
			</h2>
			<div className="wrapper grid grid-cols-1 gap-4 py-8 md:grid-cols-2 md:py-12">
				{services.map(({ title, description, image }, index) => {
					const lastAndOdd = index === services.length - 1 && services.length % 2

					return (
						<div key={title} className={cn("bg-secondary-foreground relative isolate", lastAndOdd && "md:col-span-2")}>
							{image && (
								<Image
									src={image}
									alt=""
									width={1000}
									height={1000}
									placeholder="blur"
									className="absolute z-[-1] h-full w-full object-cover"
								/>
							)}
							<div
								className={cn(
									"flex flex-col justify-end space-y-2 bg-black/60 p-4 sm:aspect-[16/9]",
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
