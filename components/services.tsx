import { cn } from "@/helpers/tailwind"
import React from "react"

const services = [
	{
		name: "Cars selection",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab reprehenderit iusto tempore? Ut non, enim adipisci blanditiis eos ad velit.",
	},
	{
		name: "Cars disassembling",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus sapiente eaque quasi numquam fugiat expedita, consequuntur, eligendi quas nisi, nobis dignissimos. Quas dicta aliquam a.",
	},
	{
		name: "Containers loading and sending",
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ullam veniam mollitia amet soluta. Quasi provident harum nemo, qui quibusdam, perspiciatis, libero molestiae commodi minus alias consectetur assumenda labore. Accusantium.",
	},
]

export const Services = () => {
	const [selected, setSelected] = React.useState(0)

	return (
		<section className="px-4">
			<h1 className="text-center text-3xl font-bold">Our services</h1>
			<ul className="flex justify-center gap-2 border-b">
				{services.map((service, index) => (
					<li
						key={service.name}
						className={cn(
							"flex items-center justify-between border-b border-transparent p-4",
							selected === index && "border-primary border-b"
						)}
						onClick={() => setSelected(index)}
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
							className={cn(
								"text-secondary-foreground font-bold peer-focus-visible:outline",
								selected === index && "text-primary"
							)}
						>
							{service.name}
						</label>
					</li>
				))}
			</ul>

			<div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2">
				<div>{services[selected].description}</div>

				<div className="bg-primary aspect-[3/4]"></div>
			</div>
		</section>
	)
}
