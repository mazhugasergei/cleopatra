import { cn } from "@/helpers/tailwind"

export interface MapProps extends React.HTMLAttributes<HTMLIFrameElement> {
	ref?: React.Ref<HTMLIFrameElement>
}

export const Map = ({ className, ...props }: MapProps) => (
	<iframe
		src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.6933385009274!2d126.6016822!3d37.5622882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b80225befd73d%3A0xe2ddd400940a884!2s1550%20Oryu-dong%2C%20Seo-gu%2C%20Incheon%2C%20South%20Korea!5e0!3m2!1sen!2sru!4v1738319140008!5m2!1sen!2sru"
		allowFullScreen
		loading="lazy"
		referrerPolicy="no-referrer-when-downgrade"
		className={cn("bg-secondary h-full w-full rounded-xl border", className)}
		{...props}
	/>
)
