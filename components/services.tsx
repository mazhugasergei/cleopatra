import { cn } from "@/helpers/tailwind"
import containers from "@/public/containers.jpg"
import React from "react"
import { Tabs, TabsData } from "./tabs"
import { TabsContent } from "./tabs-content"

const services: TabsData = [
	{
		name: "Cars selection",
		content: (
			<TabsContent description="We offer a wide range of vehicles, including Korean, German, American, and other top-brand cars. Whether you're looking for a new, used, or salvaged vehicle, we source the best options to meet your needs and budget." />
		),
	},
	{
		name: "Spare parts selection",
		content: (
			<TabsContent description="We provide a wide range of high-quality spare parts for Korean, German, American, and other top-brand vehicles. Our team carefully selects and supplies reliable parts to meet your needs, ensuring quality, durability, and worldwide delivery." />
		),
	},
	{
		name: "Container loading & shipping",
		content: (
			<TabsContent
				description="We specialize in secure container loading and worldwide shipping. Our team ensures that vehicles and parts are packed efficiently, minimizing damage and maximizing space. We handle all logistics, ensuring smooth and timely delivery to your destination."
				image={containers}
			/>
		),
	},
]

export interface ServicesProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Services = ({ className, ...props }: ServicesProps) => {
	return (
		<section id="services" className={cn("space-y-2", className)} {...props}>
			<h2 className="text-center text-4xl font-bold">Our services</h2>
			<p className="text-center text-balance">
				We source, dismantle, and ship cars and parts worldwide. Reliable, efficient, and hassle-free.
			</p>
			<Tabs data={services} />
		</section>
	)
}
