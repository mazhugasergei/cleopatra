import { headingFont } from "@/fonts"
import { cn } from "@/utils/cn"
import Link from "next/link"

export interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
	full?: boolean
}

export const Logo = ({ full, className, ...props }: LogoProps) => (
	<Link href="/" data-test="logo" className={cn(headingFont.className, "text-xl font-bold", className)} {...props}>
		{full ? "CLEOPATRA TRADING CO." : "CLEOPATRA"}
	</Link>
)
