import { ChevronDownIcon } from "@/app/icons"
import { headingFont } from "@/fonts"
import { cn } from "@/helpers/tailwind"
import hero from "@/public/hero.jpg"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Hero = ({ className, ...props }: HeroProps) => {
	return (
		<section data-test="hero" className={cn("bg-primary relative grid h-screen", className)} {...props}>
			<Image
				src={hero}
				alt=""
				width={2000}
				height={1500}
				placeholder="blur"
				data-test="hero-image"
				className="pointer-events-none absolute inset-0 h-full w-full object-cover object-[40%_0%] sm:order-1"
			/>

			<div className="absolute inset-0 bg-black/80 text-white">
				<div className="wrapper flex h-full items-end justify-between pb-16">
					<div>
						<h1
							data-test="hero-heading"
							className={cn(
								headingFont.className,
								"flex flex-col text-[2rem] leading-[1.2] font-bold sm:text-[3rem] lg:text-[3.5rem]"
							)}
						>
							<span>Dont just get it. </span>
							<span>Drive it.</span>
						</h1>
						<p data-test="hero-description" className="text-secondary mt-1 text-sm italic sm:text-base lg:text-lg">
							Cars & spare parts, delivered worldwide.
						</p>
					</div>

					<Link
						href="#about"
						className={buttonVariants({ variant: "ghost", size: "icon", className: "rounded-none text-white" })}
					>
						<ChevronDownIcon />
					</Link>
				</div>
			</div>
		</section>
	)
}
