import { Locale } from "@/lib/dictionaries"
import { cn } from "@/utils/cn"
import { Logo } from "../logo"
import { LanguageSelect } from "../ui/language-select"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
	locale: Locale
}

export const Footer = ({ locale, className, ...props }: FooterProps) => (
	<footer className={cn("border-t", className)} {...props}>
		<div className="wrapper flex items-center justify-between gap-4 py-8">
			<Logo full className="max-sm:text-base" />
			<div>
				<LanguageSelect locale={locale} />
			</div>
		</div>
	</footer>
)
