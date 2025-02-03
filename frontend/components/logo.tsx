import { headingFont } from "@/app/fonts"
import { cn } from "@/helpers/tailwind"
import Link from "next/link"

export interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
	ref?: React.Ref<HTMLAnchorElement>
	full?: boolean
}

export const Logo = ({ full, className, ...props }: LogoProps) => (
	<Link href="/" className={cn(headingFont.className, "text-xl font-bold", className)} {...props}>
		{full ? "CLEOPATRA TRADING CO." : "CLEOPATRA"}
	</Link>
)
