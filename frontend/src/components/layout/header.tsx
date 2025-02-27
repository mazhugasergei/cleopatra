"use client"

import { Logo } from "@/components/logo"
import { NavMenu } from "@/components/nav-menu"
import { buttonVariants } from "@/components/ui/button"
import { DictionaryProps } from "@/lib/dictionaries"
import { cn } from "@/utils/cn"
import { PhoneIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement>, DictionaryProps {
	routes: { href: string; label: string }[]
}

export const Header = ({ dict, routes, className, children, ...props }: HeaderProps) => {
	const headerRef = React.useRef<HTMLDivElement>(null)
	const [isAtTop, setIsAtTop] = React.useState(true)

	React.useEffect(() => {
		const handleScroll = () => setIsAtTop(window.scrollY === 0)
		handleScroll()
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	return (
		<header
			ref={headerRef}
			data-test="header"
			className={cn(
				"sticky top-0 right-0 left-0 z-50",
				isAtTop ? "bg-transparent" : "bg-background",
				isAtTop && "invert",
				className
			)}
			{...props}
		>
			<div className={cn("wrapper flex items-center justify-between border-b py-2", isAtTop && "border-transparent")}>
				<nav className="max-md:hidden">
					<ul className="flex items-center">
						{routes.map(
							({ href, label }, index) =>
								href !== "#contact" && (
									<li key={href} className={cn(!index && "-ml-4")}>
										<Link
											href={href}
											data-test={`${href.replace(/#/g, "")}-link`}
											className={buttonVariants({ variant: "link" })}
										>
											{label}
										</Link>
									</li>
								)
						)}
					</ul>
				</nav>

				<div className="md:hidden">
					<NavMenu routes={routes} />
				</div>

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
