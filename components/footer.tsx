import { cn } from "@/helpers/tailwind"
import { Socials } from "./contact"
import { Logo } from "./logo"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Footer = ({ className, ...props }: FooterProps) => (
	<footer className={cn("flex items-center justify-between gap-4 border-t py-8", className)} {...props}>
		<Logo full />
		<Socials />
	</footer>
)
