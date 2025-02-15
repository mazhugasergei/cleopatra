import { cn } from "@/helpers/tailwind"
import { Locale } from "@/lib/dictionaries"
import { Logo } from "../logo"
import { LanguageSelector } from "../ui/language-selector"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
	locale: Locale
}

export const Footer = ({ locale, className, ...props }: FooterProps) => (
	<footer className={cn("bg-primary", className)} {...props}>
		<div className="wrapper text-primary-foreground flex items-center justify-between gap-4 py-8">
			<Logo full className="max-sm:text-base" />
			<LanguageSelector locale={locale} />
		</div>
	</footer>
)
