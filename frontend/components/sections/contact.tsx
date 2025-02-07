"use client"

import { cn } from "@/helpers/tailwind"
import { useHeaderHeight } from "@/hooks/useHeaderHeight"
import { Contacts } from "../contacts"
import { SectionHeader } from "../layout/section-header"
import { Map } from "../map"
import { Socials } from "../socials"

export interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Contact = ({ className, ...props }: ContactProps) => {
	const headerHeight = useHeaderHeight()

	return (
		<section
			id="contact"
			data-test="contact"
			className={cn("flex flex-col", className)}
			style={{
				minHeight: `calc(100vh - ${headerHeight}px)`,
			}}
			{...props}
		>
			<SectionHeader backLink="#services" title="Contact" />
			<div className="wrapper">
				<div className="wrapper grid flex-1 grid-cols-1 gap-4 py-4 md:grid-cols-[7fr_10fr]">
					<div className="flex flex-col justify-center">
						<h2 className="text-4xl font-bold">Contact us</h2>
						<Contacts className="my-4 border-y py-4" />
						<Socials />
					</div>
					<Map />
				</div>
			</div>
		</section>
	)
}
