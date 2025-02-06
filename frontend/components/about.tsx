import { cn } from "@/helpers/tailwind"
import about from "@/public/about.jpg"
import Image from "next/image"

export interface AboutProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const About = ({ className, ...props }: AboutProps) => {
	return (
		<section id="about" className={cn("grid grid-cols-1 gap-4 md:grid-cols-[7fr_10fr] md:gap-8", className)} {...props}>
			<Image
				src={about}
				alt=""
				width={1000}
				height={1000}
				placeholder="blur"
				className="inset-0 h-full rounded-xl object-cover object-[50%_20%] max-md:aspect-[16/9] md:aspect-[4/3]"
			/>

			<div className="space-y-4 self-center py-4">
				<h2 data-test="about-heading" className="border-b pb-4 text-4xl font-bold">
					About us
				</h2>
				<p>
					At Cleopatra Trading Co., we specialize in sourcing and delivering vehicles and spare parts worldwide. Based
					in Incheon, South Korea, we provide a seamless experience for customers looking for Korean, German, American,
					and other top-brand vehicles. Our team ensures secure container loading and efficient global shipping.
				</p>
				<p>
					With multilingual support in Korean, English, Arabic, and Russian, we are committed to offering reliable and
					professional service to clients worldwide. Whether you need a fully assembled car or specific parts, we
					guarantee quality and satisfaction every step of the way.
				</p>
			</div>
		</section>
	)
}
