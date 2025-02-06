"use client"

import { CloseIcon, MenuIcon, PhoneIcon } from "@/app/icons"
import { cn } from "@/helpers/tailwind"
import Link from "next/link"
import React from "react"
import { Logo } from "../logo"
import { Button, buttonVariants } from "../ui/button"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Header = ({ className, children, ref, ...props }: HeaderProps) => (
	<header
		ref={ref}
		data-test="header"
		className={cn(
			"bg-background relative sticky top-0 z-50 flex items-center justify-between border-b py-2",
			className
		)}
		{...props}
	>
		<Nav className="max-md:hidden" />
		<Menu className="md:hidden" />
		<Logo className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
		<Link href="#contact" data-test="contact-link" className={buttonVariants({ className: "rounded-none" })}>
			<PhoneIcon size={18} className="sm:hidden" />
			<span className="max-sm:hidden">Contact</span>
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
		<nav data-test="nav" {...props}>
			<ul className="flex items-center">
				{routes.map((route) => (
					<li key={route.href}>
						<Link
							href={route.href}
							data-test={`${route.href.replace(/#/g, "")}-link`}
							className={buttonVariants({ variant: "link" })}
						>
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
		return () => window.removeEventListener("scroll", close)
	}, [])

	return (
		<div className={cn("relative", className)} {...props}>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setOpen((prev) => !prev)}
				className={cn("rounded-none", open && "bg-accent")}
			>
				{open ? <CloseIcon /> : <MenuIcon />}
			</Button>

			{open && (
				<ul className="bg-background absolute top-[110%] left-0 border p-2">
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
