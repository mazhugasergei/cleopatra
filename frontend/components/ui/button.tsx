import { cn } from "@/utils/cn"
import { cva, type VariantProps } from "class-variance-authority"
import React from "react"

export const variants = {
	variant: {
		default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
		destructive: "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90",
		outline: "border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
		secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
		ghost: "hover:bg-accent hover:text-accent-foreground",
		link: "text-primary underline-offset-4 hover:underline",
	},
	size: {
		default: "h-9 px-4 py-2",
		sm: "h-8 px-3 text-xs",
		lg: "h-10 px-8",
		icon: "h-9 min-w-9",
	},
}

export const defaultVariants: {
	variant: keyof (typeof variants)["variant"]
	size: keyof (typeof variants)["size"]
} = {
	variant: "default",
	size: "default",
}

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
	{ variants, defaultVariants }
)

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	ref?: React.Ref<HTMLButtonElement>
}

export const Button = ({ className, variant, size, children, ...props }: ButtonProps) => (
	<button className={cn(buttonVariants({ variant, size, className }))} {...props}>
		{children}
	</button>
)
