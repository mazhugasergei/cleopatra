import { cn } from "@/helpers/tailwind"
import Link from "next/link"
import { Address, AddressProps } from "./address"
import { Banks } from "./banks"
import { Phones } from "./phones"

export interface Contacts extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
	address?: AddressProps
}

export const Contacts = ({ address = {}, className, ...props }: Contacts) => (
	<div className={cn("flex flex-col items-start gap-4", className)} {...props}>
		<p className="flex flex-col text-[1.2rem] font-bold">CLEOPATRA TRAIDING CO.</p>

		<Phones />

		<Link href="mailto:hamdy197514@gmail.com" rel="noopener noreferrer" className="group">
			<span className="font-bold">Email:</span> <span className="group-hover:underline">hamdy197514@gmail.com</span>
		</Link>

		<Address {...address} />
		<Banks />
	</div>
)
