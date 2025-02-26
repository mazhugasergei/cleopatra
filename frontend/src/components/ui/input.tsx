import { cn } from "@/utils/cn"
import React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	ref?: React.Ref<HTMLInputElement>
}

export const Input = ({ className, ref, ...props }: InputProps) => (
	<input
		ref={ref}
		className={cn(
			"border-input file:text-foreground placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-1 focus-visible:outline-hidden disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			className
		)}
		{...props}
	/>
)
