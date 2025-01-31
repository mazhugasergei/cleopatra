import { cn } from "@/helpers/tailwind"
import { Logo } from "./logo"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Footer = ({ className, ...props }: FooterProps) => (
	<footer className={cn("mt-8 border-t py-4", className)} {...props}>
		<Logo full />
	</footer>
)
