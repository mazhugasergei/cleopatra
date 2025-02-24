import { headingFont } from "@/fonts"
import { DictionaryProps } from "@/lib/dictionaries"
import about from "@/public/about.jpg"
import { cn } from "@/utils/cn"
import { preventWidowWord } from "@/utils/text"
import Image from "next/image"
import React from "react"
import { SectionHeader } from "../layout/section-header"

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	ref?: React.Ref<HTMLDivElement>
	routes: { href: string; label: string }[]
}

export const About = ({ dict, routes, ...props }: AboutProps) => {
	return (
		<section id="about" data-test="about" {...props}>
			<SectionHeader backLink="#hero" title="About us" routes={routes} />
			<div className="wrapper pb-12 md:pb-20">
				<h2
					className={cn(
						headingFont.className,
						"mt-6 text-center text-5xl font-bold sm:text-8xl md:mt-12 md:-mb-6 md:text-9xl lg:mt-16 lg:-mb-10 lg:text-[12rem]"
					)}
				>
					{dict?.about?.heading}
				</h2>
				<div className="grid grid-cols-1 gap-4 md:grid-cols-[10fr_8fr] md:gap-8">
					<div className="space-y-4 self-center py-4 md:py-12">
						{dict?.about?.description?.map((p: string, i: number) => <p key={i}>{preventWidowWord(p)}</p>)}
					</div>

					<Image
						src={about}
						alt=""
						width={1000}
						height={1000}
						placeholder="blur"
						className="inset-0 h-full object-cover object-[50%_20%] max-md:aspect-[16/9] md:aspect-[4/3]"
					/>
				</div>
			</div>
		</section>
	)
}
