"use client"

import { ChevronDownIcon } from "@/app/icons"
import { headingFont } from "@/fonts"
import { cn } from "@/helpers/tailwind"
import { DictionaryProps } from "@/lib/dictionaries"
import hero from "@/public/hero.jpg"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { buttonVariants } from "../ui/button"

export interface HeroProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	ref?: React.Ref<HTMLDivElement>
}

export const Hero = ({ dict, className, ...props }: HeroProps) => {
	return (
		<section data-test="hero" className={cn("bg-primary relative h-screen", className)} {...props}>
			<BG />

			<div className="absolute inset-0 bg-black/50 text-white">
				<div className="wrapper flex h-full items-end justify-between pb-16">
					<div className="space-y-1">
						<h1
							className={cn(
								headingFont.className,
								"flex flex-col text-[2.2rem] leading-[1.1] font-bold sm:text-[3rem] md:text-[4rem] lg:text-[5rem]"
							)}
						>
							{dict?.hero?.heading?.map((line: string, index: number) => <span key={index}>{line}</span>)}
						</h1>
						<p className="text-secondary text-sm italic sm:text-base lg:text-lg">{dict?.hero?.subheading}</p>
					</div>

					<Link href="#about" className={buttonVariants({ variant: "ghost", size: "icon" })}>
						<ChevronDownIcon />
					</Link>
				</div>
			</div>
		</section>
	)
}

export interface BGProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const BG = ({ className, ...props }: BGProps) => {
	const speed = 0.2
	const [offset, setOffset] = React.useState(0)

	React.useEffect(() => {
		const handleScroll = () => {
			setOffset(window.scrollY * speed)
		}

		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [speed])

	return (
		<div className={cn("relative h-full overflow-hidden", className)} {...props}>
			<Image
				src={hero}
				alt=""
				width={2000}
				height={1500}
				placeholder="blur"
				className="absolute h-full w-full object-cover"
				style={{
					top: offset,
				}}
			/>
		</div>
	)
}
