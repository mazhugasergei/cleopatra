export interface SVGIconProps extends React.HTMLAttributes<SVGSVGElement> {
	size?: number
	ref?: React.Ref<SVGSVGElement>
}

export const MenuIcon = ({ size, ...props }: SVGIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size ?? 24}
		height={size ?? 24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<line x1="4" x2="20" y1="12" y2="12" />
		<line x1="4" x2="20" y1="6" y2="6" />
		<line x1="4" x2="20" y1="18" y2="18" />
	</svg>
)

export const CloseIcon = ({ size, ...props }: SVGIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size ?? 24}
		height={size ?? 24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	</svg>
)

export const InstagramIcon = ({ size, ...props }: SVGIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size ?? 24}
		height={size ?? 24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
		<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
		<line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
	</svg>
)

export const PhoneIcon = ({ size, ...props }: SVGIconProps) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size ?? 24}
		height={size ?? 24}
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		strokeWidth="2"
		strokeLinecap="round"
		strokeLinejoin="round"
		{...props}
	>
		<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
	</svg>
)
