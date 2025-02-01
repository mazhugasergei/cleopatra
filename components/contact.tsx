import { cn } from "@/helpers/tailwind"
import Link from "next/link"

export interface ContactProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Contact = ({ className, ...props }: ContactProps) => {
	return (
		<section id="contact" className="grid grid-cols-1 gap-4 md:grid-cols-[7fr_10fr]" {...props}>
			<div>
				<h2 className="border-b pb-4 text-4xl font-bold">Contact us</h2>
				<Contacts className="mt-4" />
			</div>
			<iframe
				className="bg-secondary h-full w-full rounded-xl border"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6933385009274!2d126.6016822!3d37.5622882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b80225befd73d%3A0xe2ddd400940a884!2s1550%20Oryu-dong%2C%20Seo-gu%2C%20Incheon%2C%20South%20Korea!5e0!3m2!1sen!2sru!4v1738319140008!5m2!1sen!2sru"
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</section>
	)
}

export interface Contacts extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Contacts = ({ className, ...props }: Contacts) => (
	<div className={cn("flex flex-col items-start gap-4", className)} {...props}>
		<p className="flex flex-col text-[1.2rem] font-bold">CLEOPATRA TRAIDING CO.</p>

		<div>
			<div>
				<p className="font-bold">Korean / English / Arabic</p>
				<Link href="tel:+821082969320" className="hover:underline">
					+8210-8296-9320 (Hamdy)
				</Link>
			</div>
			<div>
				<p className="font-bold">Russian / English</p>
				<Link href="tel:+8210479789320" className="hover:underline">
					+8210-4798-9320 (Natalia)
				</Link>
			</div>
		</div>

		<Link href="mailto:hamdy197514@gmail.com" className="group">
			<span className="font-bold">Email:</span> <span className="group-hover:underline">hamdy197514@gmail.com</span>
		</Link>

		<Link
			href="https://www.google.com/maps/place/1550,+Oryu-dong,+Seo-gu,+Incheon/@37.4582313,126.6396971,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3c7a6a1d3f9:0x5d1d0b7a4b4b0e5!8m2!3d37.458227!4d126.6418858"
			target="_blank"
			className="hover:underline"
		>
			1550, Oryu-dong, Seo-gu, Incheon, Korea
		</Link>

		<div className="grid grid-cols-[repeat(2,auto)] gap-x-4">
			<p className="font-bold">Hana Bank</p>
			<p>106-891533-861107</p>
			<p className="font-bold">KB</p>
			<p>026401-04-075346</p>
		</div>
	</div>
)
