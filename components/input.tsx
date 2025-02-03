import { cn } from "@/helpers/tailwind"
import React from "react"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	ref?: React.Ref<HTMLInputElement>
}

export const Input = ({ className, ref, ...props }: InputProps) => (
	<input
		ref={ref}
		className={cn(
			"flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
			className
		)}
		{...props}
	/>
)
