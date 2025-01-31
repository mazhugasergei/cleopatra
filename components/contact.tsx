import Link from "next/link"

export const Contact = () => {
	return (
		<section className="px-4">
			<h1 className="text-3xl font-bold">Contact us</h1>

			<Contacts />
		</section>
	)
}

export const Contacts = () => (
	<div className="mt-4 flex flex-col items-start gap-4">
		<p className="flex flex-col text-[1.2rem] font-bold">CLEOPATRA TRAIDING CO.</p>

		<div>
			<div>
				<p className="font-bold">Korean / English / Arabic</p>
				<p>+8210-8296-9320 (Hamdy)</p>
			</div>
			<div>
				<p className="font-bold">Russian / English</p>
				<p>+8210-4798-9320 (Natalia)</p>
			</div>
		</div>

		<Link href="mailto:hamdy197514@gmail.com" className="group">
			<span className="font-bold">Email:</span> <span className="group-hover:underline">hamdy197514@gmail.com</span>
		</Link>

		<Link
			href="https://www.google.com/maps/place/1550,+Oryu-dong,+Seo-gu,+Incheon/@37.4582313,126.6396971,17z/data=!3m1!4b1!4m5!3m4!1s0x357ca3c7a6a1d3f9:0x5d1d0b7a4b4b0e5!8m2!3d37.458227!4d126.6418858"
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
