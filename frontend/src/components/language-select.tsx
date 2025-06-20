"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Locale } from "@/lib/types"
import { GlobeIcon } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import { Button } from "./ui/button"

export interface LanguageSelectProps extends React.ComponentProps<typeof DropdownMenu> {
	locale: Locale
}

export const LanguageSelect = ({ locale, ...props }: LanguageSelectProps) => {
	const pathname = usePathname()
	const pathnameWithoutLocale = pathname.replace(`/${locale}`, "/")

	const routes = [
		{ code: "en", label: "English" },
		{ code: "ru", label: "Русский" },
	]

	const localeName = routes.find((route) => route.code === locale)?.label

	return (
		<DropdownMenu {...props}>
			<DropdownMenuTrigger asChild>
				<Button variant="outline">
					<GlobeIcon />
					{localeName}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mx-4 flex flex-col">
				{routes.map((route) => (
					<DropdownMenuItem key={route.code} asChild>
						<Link href={"/" + route.code + pathnameWithoutLocale} className="px-4 py-2 font-medium">
							{route.label}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
