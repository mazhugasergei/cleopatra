"use client"

import { PhoneIcon } from "@/app/icons"
import { useHeaderHeight } from "@/hooks/useHeaderHeight"
import { DictionaryProps } from "@/lib/dictionaries"
import { cn } from "@/utils/cn"
import Link from "next/link"
import React from "react"
import { Logo } from "../logo"
import { buttonVariants } from "../ui/button"
import { Menu } from "../ui/menu"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	ref?: React.Ref<HTMLDivElement>
	routes: { href: string; label: string }[]
}

export const Header = ({ dict, routes, className, children, ref, ...props }: HeaderProps) => {
	const headerHeight = useHeaderHeight()
	const [isAtTop, setIsAtTop] = React.useState(true)

	React.useEffect(() => {
		document.documentElement.style.scrollPadding = `${headerHeight}px`
	}, [headerHeight])

	React.useEffect(() => {
		const handleScroll = () => setIsAtTop(window.scrollY === 0)
		handleScroll()
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			ref={ref}
			data-test="header"
			className={cn(
				"fixed top-0 right-0 left-0 z-50",
				isAtTop ? "bg-transparent" : "bg-background",
				isAtTop && "invert",
				className
			)}
			{...props}
		>
			<div className={cn("wrapper flex items-center justify-between border-b py-2", isAtTop && "border-transparent")}>
				<nav className="max-md:hidden">
					<ul className="flex items-center">
						{routes.map(({ href, label }, index) => (
							<li key={href} className={cn(!index && "-ml-4")}>
								<Link
									href={href}
									data-test={`${href.replace(/#/g, "")}-link`}
									className={buttonVariants({ variant: "link" })}
								>
									{label}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Menu routes={routes} className="md:hidden" />

				<Logo className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

				{/* desktop */}
				<Link
					href="#contact"
					data-test="contact-link"
					className={buttonVariants({ size: "lg", className: "max-md:hidden" })}
				>
					{dict?.header?.contact}
				</Link>
				{/* mobile */}
				<Link
					href="#contact"
					data-test="contact-link"
					className={buttonVariants({ size: "icon", className: "md:hidden" })}
				>
					<PhoneIcon size={18} />
				</Link>
			</div>
		</header>
	)
}
