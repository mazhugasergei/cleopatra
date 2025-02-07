"use client"

import { ChevronLeftIcon, EllipsisIcon } from "@/app/icons"
import { cn } from "@/helpers/tailwind"
import { useHeaderHeight } from "@/hooks/useHeaderHeight"
import Link from "next/link"
import React from "react"
import { Menu } from "../layout/header"
import { buttonVariants } from "../ui/button"
import { H2 } from "../ui/headings"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	backLink: string
	title: string
	ref?: React.Ref<HTMLDivElement>
}

export const SectionHeader = ({ backLink, title, className, ...props }: SectionHeaderProps) => {
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
			<H2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">{title}</H2>
			<Menu align="right" openIcon={<EllipsisIcon />} closeIcon={<EllipsisIcon />} />
		</header>
	)
}
