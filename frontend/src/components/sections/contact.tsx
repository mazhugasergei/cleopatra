"use client"

import { headingFont } from "@/fonts"
import map from "@/images/map.jpg"
import { DictionaryProps } from "@/lib/dictionaries"
import { cn } from "@/utils/cn"
import Image from "next/image"
import { Contacts } from "../contacts"
import { SectionHeader } from "../layout/section-header"
import { Logo } from "../logo"

export interface ContactProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	ref?: React.Ref<HTMLDivElement>
	routes: { href: string; label: string }[]
}

export const Contact = ({ dict, routes, className, ...props }: ContactProps) => {
	return (
		<section id="contact" data-test="contact" className={cn("flex flex-col", className)} {...props}>
			<SectionHeader backLink="#services" title="Contact" routes={routes} />

			<div className="my-10 space-y-2 text-center md:my-16 lg:my-18">
				<h2 className={cn(headingFont.className, "text-4xl font-bold sm:text-6xl md:text-7xl lg:text-8xl")}>
					{dict?.contact?.heading}
				</h2>
				<Logo full />
			</div>

			<div className="wrapper grid flex-1 grid-cols-1 gap-8 pb-8 md:grid-cols-[7fr_10fr]">
				<Image src={map} alt="" className="rounded-md md:order-1" />
				<Contacts />
			</div>
		</section>
	)
}
