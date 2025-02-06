import { Contacts } from "../contacts"
import { Map } from "../map"
import { Socials } from "../socials"

export interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Contact = ({ className, ...props }: ContactProps) => {
	return (
		<section
			id="contact"
			data-test="contact"
			className="wrapper grid grid-cols-1 gap-4 md:grid-cols-[7fr_10fr]"
			{...props}
		>
			<div>
				<h2 className="text-4xl font-bold">Contact us</h2>
				<Contacts address={{ withLinks: true }} className="my-4 border-y py-4" />
				<Socials />
			</div>
			<Map />
		</section>
	)
}
