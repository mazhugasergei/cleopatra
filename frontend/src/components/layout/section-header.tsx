"use client"

import { NavMenu } from "@/components/nav-menu"
import { buttonVariants } from "@/components/ui/button"
import { headingFont } from "@/fonts"
import { useHeaderHeight } from "@/hooks/useHeaderHeight"
import { cn } from "@/utils/cn"
import { ChevronLeftIcon } from "lucide-react"
import Link from "next/link"
import React from "react"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	backLink: string
	title: string
	routes: { href: string; label: string }[]
}

export const SectionHeader = ({ backLink, title, routes, className, ...props }: SectionHeaderProps) => {
	const height = useHeaderHeight()

	return (
		<header
			className={cn(
				"wrapper bg-background sticky top-0 z-50 flex items-center justify-between border-b py-2",
				className
			)}
			style={{ height }}
			{...props}
		>
			<Link href={backLink} className={buttonVariants({ variant: "ghost", size: "icon" })}>
				<ChevronLeftIcon />
			</Link>
			<h2
				className={cn(
					headingFont.className,
					"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold"
				)}
			>
				{title}
			</h2>

			<NavMenu routes={routes} />
		</header>
	)
}
