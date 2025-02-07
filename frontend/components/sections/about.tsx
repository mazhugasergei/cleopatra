import { headingFont } from "@/fonts"
import { cn } from "@/helpers/tailwind"
import about from "@/public/about.jpg"
import Image from "next/image"
import React from "react"
import { SectionHeader } from "../layout/section-header"

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const About = (props: AboutProps) => {
	return (
		<section id="about" data-test="about" className="wrapper" {...props}>
			<SectionHeader backLink="#" title="About us" />
			<h2
				className={cn(
					headingFont.className,
					"mt-6 text-center text-6xl font-bold sm:text-8xl md:mt-12 md:-mb-6 md:text-9xl lg:mt-16 lg:-mb-10 lg:text-[12rem]"
				)}
			>
				About us
			</h2>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-[10fr_8fr] md:gap-8">
				<div className="space-y-4 self-center py-4 md:py-12">
					<p>
						At Cleopatra Trading Co., we specialize in sourcing and delivering vehicles and spare parts worldwide. Based
						in Incheon, South Korea, we provide a seamless experience for customers looking for Korean, German,
						American, and other top-brand vehicles. Our team ensures secure container loading and efficient global
						shipping.
					</p>
					<p>
						With multilingual support in Korean, English, Arabic, and Russian, we are committed to offering reliable and
						professional service to clients worldwide. Whether you need a fully assembled car or specific parts, we
						guarantee quality and satisfaction every step of the way.
					</p>
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
		</section>
	)
}
