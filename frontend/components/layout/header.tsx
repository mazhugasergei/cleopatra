"use client"

import { CloseIcon, MenuIcon, PhoneIcon } from "@/app/icons"
import { cn } from "@/helpers/tailwind"
import { useHeaderHeight } from "@/hooks/useHeaderHeight"
import Link from "next/link"
import React from "react"
import { Logo } from "../logo"
import { Button, buttonVariants } from "../ui/button"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Header = ({ className, children, ref, ...props }: HeaderProps) => {
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
				<Nav className="max-md:hidden" />
				<Menu className="md:hidden" />
				<Logo className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
				{/* desktop */}
				<Link
					href="#contact"
					data-test="contact-link"
					className={buttonVariants({ size: "lg", className: "max-md:hidden" })}
				>
					Contact
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
	)
}

export interface MobileNavProps extends React.HTMLAttributes<HTMLDivElement> {
	align?: "left" | "right"
	openIcon?: React.ReactElement
	closeIcon?: React.ReactElement
	ref?: React.Ref<HTMLDivElement>
}

export const Menu = ({
	align = "left",
	openIcon = <MenuIcon />,
	closeIcon = <CloseIcon />,
	className,
	...props
}: MobileNavProps) => {
	const [open, setOpen] = React.useState(false)
	const menuRef = React.useRef<HTMLDivElement>(null)

	React.useEffect(() => {
		const close = (e: MouseEvent) => {
			if (!menuRef.current) return
			if (menuRef.current.contains(e.target as Node)) return
			setOpen(false)
		}
		document.addEventListener("click", close, true)
		return () => document.removeEventListener("click", close, true)
	}, [])

	React.useEffect(() => {
		const closeOnScroll = () => setOpen(false)
		window.addEventListener("scroll", closeOnScroll)
		return () => window.removeEventListener("scroll", closeOnScroll)
	}, [])

	return (
		<div ref={menuRef} className={cn("relative", className)} {...props}>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setOpen((prev) => !prev)}
				className={cn("cursor-pointer rounded-none", open && "bg-accent")}
			>
				{open ? closeIcon : openIcon}
			</Button>

			{open && (
				<ul className={cn("bg-background absolute top-[110%] border p-2", align === "left" ? "left-0" : "right-0")}>
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
