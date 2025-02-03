import { headingFont } from "@/app/fonts"
import { cn } from "@/helpers/tailwind"
import kiaK5 from "@/public/kia-k5.jpg"
import Image from "next/image"
import { Contacts } from "./contact"

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Hero = ({ className, ...props }: HeroProps) => {
	return (
		<section className={cn("grid grid-cols-1 gap-4 pt-10 md:grid-cols-[7fr_10fr]", className)} {...props}>
			<div className="px-8 py-10">
				<h1 className={cn(headingFont.className, "flex flex-col text-[3rem] leading-[1.2] font-bold")}>
					<span>Dont just </span>
					<span>get it. </span>
					<span>Drive it.</span>
				</h1>
				<p className="text-secondary-foreground mt-1 italic">Cars & spare parts, delivered worldwide.</p>
				<Contacts className="mt-4" />
			</div>

			<Image
				src={kiaK5}
				alt=""
				width={1000}
				height={1000}
				placeholder="blur"
				className="pointer-events-none h-full w-full rounded-xl object-cover object-[40%_0%]"
			/>
		</section>
	)
}
