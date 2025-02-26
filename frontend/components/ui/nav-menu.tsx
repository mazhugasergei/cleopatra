"use client"

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { X as CloseIcon, Menu as MenuIcon } from "lucide-react"
import Link from "next/link"
import React from "react"
import { Button } from "./button"

export interface MenuProps extends React.ComponentProps<typeof DropdownMenu> {
	routes: { href: string; label: string }[]
}

export const NavMenu = ({ routes, ...props }: MenuProps) => {
	const [open, setOpen] = React.useState(false)

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button variant="ghost" size="icon">
					{open ? <CloseIcon /> : <MenuIcon />}
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="mx-4 flex flex-col">
				{routes.map((route) => (
					<DropdownMenuItem key={route.href} asChild>
						<Link href={route.href} className="px-4 py-2 font-medium">
							{route.label}
						</Link>
					</DropdownMenuItem>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
