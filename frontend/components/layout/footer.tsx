import { cn } from "@/helpers/tailwind"
import { Logo } from "../logo"
import { Socials } from "../socials"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Footer = ({ className, ...props }: FooterProps) => (
	<footer className={cn("bg-primary", className)} {...props}>
		<div className="wrapper text-primary-foreground flex items-center justify-between gap-4 py-8">
			<Logo full className="max-sm:text-base" />
			<Socials />
		</div>
	</footer>
)
