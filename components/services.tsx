"use client"

import { cn } from "@/helpers/tailwind"
import React from "react"
import { buttonVariants } from "./button"

const services = [
	{
		name: "Cars selection",
		description:
			"We offer a wide range of vehicles, including Korean, German, American, and other top-brand cars. Whether you're looking for a new, used, or salvaged vehicle, we source the best options to meet your needs and budget.",
	},
	{
		name: "Cars disassembling",
		description:
			"Our skilled team dismantles vehicles to provide customers with specific parts or components. We ensure that every part is handled professionally, preserving its quality and functionality for resale or reuse.",
	},
	{
		name: "Containers loading and sending",
		description:
			"We specialize in secure container loading and worldwide shipping. Our team ensures that vehicles and parts are packed efficiently, minimizing damage and maximizing space. We handle all logistics, ensuring smooth and timely delivery to your destination.",
	},
]

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Services = (props: ServicesProps) => {
	const [selected, setSelected] = React.useState(0)

	return (
		<section id="services" {...props}>
			<h2 className="text-center text-4xl font-bold">Our services</h2>
			<p className="mt-2 text-balance text-center">
				We source, dismantle, and ship cars and parts worldwide. Reliable, efficient, and hassle-free.
			</p>

			<ul className="mt-4 flex justify-center gap-2 border-b">
				{services.map((service, index) => (
					<li
						key={service.name}
						className={cn(
							"flex items-center justify-between border-b-2 border-transparent p-3",
							selected === index && "border-primary"
						)}
					>
						<input
							type="radio"
							name="services"
							id={service.name}
							checked={selected === index}
							onChange={() => setSelected(index)}
							className="peer absolute opacity-0"
						/>
						<label
							htmlFor={service.name}
							className={buttonVariants({
								variant: "ghost",
								className: cn(
									"cursor-pointer peer-focus-visible:outline",
									selected === index ? "text-primary" : "text-muted-foreground"
								),
							})}
						>
							{service.name}
						</label>
					</li>
				))}
			</ul>

			<div className="grid grid-cols-1 gap-10 pt-8 md:grid-cols-2">
				<div>{services[selected].description}</div>
				<div className="bg-primary aspect-[3/2] rounded-xl"></div>
			</div>
		</section>
	)
}
