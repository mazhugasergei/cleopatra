import { InstagramIcon } from "@/app/icons"
import Link from "next/link"
import { buttonVariants } from "./ui/button"

const socials = [
	{
		label: "Instagram",
		href: "https://instagram.com/cleopatra_trd",
		icon: <InstagramIcon size={20} />,
	},
]

export interface SocialsProps extends React.HTMLAttributes<HTMLUListElement> {
	ref?: React.Ref<HTMLUListElement>
}

export const Socials = (props: SocialsProps) => (
	<ul {...props}>
		{socials.map((social) => (
			<li key={social.href}>
				<Link
					href={social.href}
					target="_blank"
					rel="noopener noreferrer"
					className={buttonVariants({ variant: "ghost", size: "icon", className: "!rounded-full" })}
				>
					{social.icon}
				</Link>
			</li>
		))}
	</ul>
)
