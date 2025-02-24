"use client"

import { GlobeIcon } from "@/app/icons"
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select"
import { Locale } from "@/lib/dictionaries"
import React from "react"

export interface LanguageSelectProps extends React.ComponentProps<typeof Select> {
	locale: Locale
}

export const LanguageSelect = ({ locale, ...props }: LanguageSelectProps) => {
	const routes = [
		{ href: "/en", label: "EN" },
		{ href: "/ru", label: "RU" },
	]

	return (
		<Select onValueChange={(value) => (window.location.href = value)} {...props}>
			<SelectTrigger className="gap-1">
				<GlobeIcon size={20} />
				{locale.toUpperCase()}
			</SelectTrigger>
			<SelectContent>
				{routes.map((route) => (
					<SelectItem key={route.href} value={route.href}>
						{route.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
