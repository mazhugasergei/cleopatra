import { cn } from "@/helpers/tailwind"
import Link from "next/link"
import { buttonVariants } from "./button"
import { Logo } from "./logo"

export interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Header = ({ className, children, ref, ...props }: HeaderProps) => (
	<header
		ref={ref}
		className={cn(
			"bg-background relative sticky top-0 flex items-center justify-between border-b py-2 pr-2",
			className
		)}
		{...props}
	>
		<Nav />
		<Logo className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
		<Link href="#contact" className={buttonVariants({ size: "lg", className: "rounded-none" })}>
			Contact
		</Link>
	</header>
)

export const Nav = () => {
	const routes = [
		{
			href: "#",
			label: "Home",
		},
		{
			href: "#about",
			label: "About",
		},
		{
			href: "#services",
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
