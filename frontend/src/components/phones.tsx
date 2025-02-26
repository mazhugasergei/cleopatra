import Link from "next/link"

export interface PhonesProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Phones = (props: PhonesProps) => {
	return (
		<div {...props}>
			<div>
				<p className="font-bold">Korean / English / Arabic</p>
				<Link href="tel:+821082969320" rel="noopener noreferrer" className="hover:underline">
					+8210-8296-9320 (Hamdy)
				</Link>
			</div>
			<div>
				<p className="font-bold">Russian / English</p>
				<Link href="tel:+8210479789320" rel="noopener noreferrer" className="hover:underline">
					+8210-4798-9320 (Natalia)
				</Link>
			</div>
		</div>
	)
}
