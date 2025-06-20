import { LanguageSelect } from "@/components/language-select"
import type { Locale } from "@/lib/types"
import { cn } from "@/utils/cn"
import { Logo } from "../logo"

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
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
