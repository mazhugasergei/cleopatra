"use client"

import { cn } from "@/helpers/tailwind"
import containers from "@/public/containers.jpg"
import Image from "next/image"
import React from "react"
import { buttonVariants } from "./button"

const services = [
	{
		name: "Cars selection",
		description:
			"We offer a wide range of vehicles, including Korean, German, American, and other top-brand cars. Whether you're looking for a new, used, or salvaged vehicle, we source the best options to meet your needs and budget.",
	},
	{
		name: "Spare parts selection",
		description:
			"We provide a wide range of high-quality spare parts for Korean, German, American, and other top-brand vehicles. Our team carefully selects and supplies reliable parts to meet your needs, ensuring quality, durability, and worldwide delivery.",
	},
	{
		name: "Container loading & shipping",
		description:
			"We specialize in secure container loading and worldwide shipping. Our team ensures that vehicles and parts are packed efficiently, minimizing damage and maximizing space. We handle all logistics, ensuring smooth and timely delivery to your destination.",
		image: containers,
	},
]

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Services = ({ className, ...props }: ServicesProps) => {
	const [selected, setSelected] = React.useState(0)

	return (
		<section id="services" className={cn("space-y-2", className)} {...props}>
			<h2 className="text-center text-4xl font-bold">Our services</h2>
			<p className="text-balance text-center">
				We source, dismantle, and ship cars and parts worldwide. Reliable, efficient, and hassle-free.
			</p>

			{/* tabs */}
			<ul className="overflow-x-auto border-b">
				<div className="mx-auto flex w-fit gap-2">
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
								className="peer absolute z-[-1] opacity-0"
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
				</div>
			</ul>

			{/* content */}
			<div className="grid grid-cols-1 gap-10 pt-8 md:grid-cols-2">
				<div>{services[selected].description}</div>
				{services[selected].image && (
					<div className="bg-secondary overflow-hidden rounded-xl">
						<Image
							src={services[selected].image}
							alt=""
							width={1000}
							height={1000}
							placeholder="blur"
							className="h-full w-full object-cover"
						/>
					</div>
				)}
			</div>
		</section>
	)
}
