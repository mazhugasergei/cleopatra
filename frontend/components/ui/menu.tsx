"use client"

import { CloseIcon, MenuIcon } from "@/app/icons"
import { cn } from "@/utils/cn"
import Link from "next/link"
import React from "react"
import { Button, buttonVariants } from "./button"

export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
	align?: "top-left" | "top-right" | "bottom-left" | "bottom-right"
	openIcon?: React.ReactElement
	closeIcon?: React.ReactElement
	routes: { href: string; label: string }[]
}

export const Menu = ({
	align = "top-left",
	openIcon = <MenuIcon />,
	closeIcon = <CloseIcon />,
	routes,
	className,
	...props
}: MenuProps) => {
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
				<ul
					className={cn(
						"bg-background absolute border p-2",
						align === "top-left"
							? "top-[110%] left-0"
							: align === "top-right"
								? "top-[110%] right-0"
								: align === "bottom-left"
									? "bottom-[110%] left-0"
									: "right-0 bottom-[110%]"
					)}
				>
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
