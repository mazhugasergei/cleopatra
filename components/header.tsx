import { cn } from "@/helpers/tailwind"
import Link from "next/link"
import { Button, buttonVariants } from "./button"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Header = ({ className, children, ref, ...props }: HeaderProps) => (
	<header ref={ref} className={cn("relative flex items-center justify-between border-b py-2", className)} {...props}>
		<Nav />

		<Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold">
			CLEOPATRA
		</Link>

		<Button>Contact</Button>
	</header>
)

export const Nav = () => {
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

	return (
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
	)
}
