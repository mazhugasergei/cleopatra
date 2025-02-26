import { headingFont } from "@/fonts"
import { cn } from "@/utils/cn"

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
	ref?: React.Ref<HTMLHeadingElement>
}

export const H2 = ({ className, ...props }: HeadingProps) => (
	<h2 className={cn(headingFont.className, "text-xl font-bold", className)} {...props} />
)
