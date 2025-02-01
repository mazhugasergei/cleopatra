"use client"

import { CloseIcon, MenuIcon } from "@/app/icons"
import { cn } from "@/helpers/tailwind"
import Link from "next/link"
import React from "react"
import { Button, buttonVariants } from "./button"
import { Logo } from "./logo"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Header = ({ className, children, ref, ...props }: HeaderProps) => (
	<header
		ref={ref}
		className={cn(
			"bg-background relative sticky top-0 z-50 flex items-center justify-between border-b py-2",
			className
		)}
		{...props}
	>
		<Nav className="max-md:hidden" />
		<Menu className="md:hidden" />
		<Logo className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
		<Link href="#contact" className={buttonVariants({ size: "lg", className: "rounded-none" })}>
			Contact
		</Link>
	</header>
)

export const routes = [
	{
		href: "#",
		label: "Home",
	},
	{
		href: "#about",
		label: "About",
	},
	{
		href: "#services",
		label: "Services",
	},
]

export interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Nav = (props: NavProps) => {
	return (
		<nav {...props}>
			<ul className="flex items-center">
				{routes.map((route) => (
					<li key={route.href}>
						<Link href={route.href} className={buttonVariants({ variant: "link" })}>
							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}

export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Menu = ({ className, ...props }: MobileNavProps) => {
	const [open, setOpen] = React.useState(false)

	React.useEffect(() => {
		const close = () => setOpen(false)

		window.addEventListener("scroll", close)
		window.addEventListener("touchstart", close)

		return () => {
			window.removeEventListener("scroll", close)
			window.removeEventListener("touchstart", close)
		}
	}, [])

	return (
		<div className={cn("relative", className)} {...props}>
			<Button variant="ghost" size="icon" onClick={() => setOpen((prev) => !prev)} className={cn(open && "bg-accent")}>
				{open ? <CloseIcon /> : <MenuIcon />}
			</Button>

			{open && (
				<ul className="bg-background absolute left-0 top-[110%] rounded-md border p-2">
					{routes.map((route) => (
						<li key={route.href}>
							<Link href={route.href} className={buttonVariants({ variant: "link" })}>
								{route.label}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	)
}
