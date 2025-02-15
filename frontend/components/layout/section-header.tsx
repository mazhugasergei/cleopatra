"use client"

import { ChevronLeftIcon, EllipsisIcon } from "@/app/icons"
import { cn } from "@/helpers/tailwind"
import { useHeaderHeight } from "@/hooks/useHeaderHeight"
import Link from "next/link"
import React from "react"
import { buttonVariants } from "../ui/button"
import { H2 } from "../ui/headings"
import { Menu } from "../ui/menu"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
	backLink: string
	title: string
	routes: { href: string; label: string }[]
}

export const SectionHeader = ({ backLink, title, routes, className, ...props }: SectionHeaderProps) => {
	const height = useHeaderHeight()

	return (
		<header
			className={cn(
				"wrapper bg-background sticky top-0 z-40 flex items-center justify-between border-b py-2",
				className
			)}
			style={{
				top: height,
			}}
			{...props}
		>
			<Link href={backLink} className={buttonVariants({ variant: "ghost", size: "icon" })}>
				<ChevronLeftIcon />
			</Link>
			<H2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{title}</H2>
			<Menu align="top-right" openIcon={<EllipsisIcon />} closeIcon={<EllipsisIcon />} routes={routes} />
		</header>
	)
}
