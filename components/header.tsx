import { cn } from "@/helpers/tailwind"
import Link from "next/link"
import { Button, buttonVariants } from "./button"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

const routes = [
	{
		href: "/",
		label: "Home",
	},
	{
		href: "/about",
		label: "About",
	},
	{
		href: "/services",
		label: "Services",
	},
]

export const Header = ({ className, children, ref, ...props }: HeaderProps) => (
	<header ref={ref} className={cn("flex items-center justify-between border-b py-2", className)} {...props}>
		<Link href="/" className="text-xl font-bold">
			CLEOPATRA
		</Link>
		<nav>
			<ul className="items-centera flex">
				{routes.map((route) => (
					<li key={route.href}>
						<Link href={route.href} className={buttonVariants({ variant: "link" })}>
							{route.label}
						</Link>
					</li>
				))}
			</ul>
		</nav>
		<Button>Contact</Button>
	</header>
)
