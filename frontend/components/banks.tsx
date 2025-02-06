import { cn } from "@/helpers/tailwind"

export interface BanksProps extends React.HTMLAttributes<HTMLDivElement> {
	ref?: React.Ref<HTMLDivElement>
}

export const Banks = ({ className, ...props }: BanksProps) => {
	return (
		<div className={cn("grid grid-cols-[repeat(2,auto)] gap-x-4", className)} {...props}>
			<p className="font-bold">Hana Bank</p>
			<p>106-891533-861107</p>
			<p className="font-bold">KB</p>
			<p>026401-04-075346</p>
		</div>
	)
}
