import { cn } from "@/helpers/tailwind"
import Image, { StaticImageData } from "next/image"

export interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
	description: string
	image?: StaticImageData | string
	ref?: React.Ref<HTMLDivElement>
}

export const TabsContent = ({ description, image, className, ...props }: TabsContentProps) => (
	<div className={cn("grid grid-cols-1 gap-10 md:grid-cols-2", className)} {...props}>
		<div>{description}</div>
		{image && (
			<div className="bg-secondary overflow-hidden">
				<Image
					src={image}
					alt=""
					width={1000}
					height={1000}
					placeholder={typeof image === "string" ? undefined : "blur"}
					className="h-full w-full object-cover"
				/>
			</div>
		)}
	</div>
)
