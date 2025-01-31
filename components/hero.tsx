import { headingFont } from "@/app/fonts"
import { cn } from "@/helpers/tailwind"
import kiaK5 from "@/public/kia-k5.jpg"
import Image from "next/image"
import { Contacts } from "./contact"

export const Hero = () => {
	return (
		<section className="grid grid-cols-1 gap-4 md:grid-cols-[7fr_10fr]">
			<div className="px-8 py-10">
				<h1 className={cn(headingFont.className, "flex flex-col text-[2.5rem] font-bold leading-[1.2]")}>
					<span>Dont just </span>
					<span>get it. </span>
					<span>Drive it.</span>
				</h1>
				<p className="text-secondary-foreground mt-[.5rem] italic">Cars & spare parts, delivered worldwide.</p>

				<Contacts />
			</div>

			<div className="overflow-x-auto">
				<Image
					src={kiaK5}
					alt=""
					width={1000}
					height={1000}
					placeholder="blur"
					className="user-select-none pointer-events-none h-full object-cover object-[40%_0%]"
				/>
			</div>
		</section>
	)
}
