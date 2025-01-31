import { cn } from "@/helpers/tailwind"

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const About = ({ className, ...props }: AboutProps) => {
	return (
		<section id="about" className={cn("space-y-4", className)} {...props}>
			<h1 className="text-3xl font-bold">About us</h1>
			<p>
				At Cleopatra Traiding Co., we specialize in sourcing, dismantling, and delivering vehicles and spare parts
				worldwide. Based in Incheon, South Korea, we provide a seamless experience for customers looking for Korean,
				German, American, and other top-brand vehicles. Our team ensures disassembly, secure container loading, and
				efficient global shipping.
			</p>
			<p>
				With multilingual support in Korean, English, Arabic, and Russian, we are committed to offering reliable and
				professional service to clients worldwide. Whether you need a fully assembled car or specific parts, we
				guarantee quality and satisfaction every step of the way.
			</p>
		</section>
	)
}
