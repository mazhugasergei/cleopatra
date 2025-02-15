import { GlobeIcon } from "@/app/icons"
import { Locale } from "@/lib/dictionaries"
import { Menu, MenuProps } from "./menu"

export interface LanguageSelectorProps extends MenuProps {
	locale: Locale
}

export const LanguageSelector = ({ locale, ...peops }: LanguageSelectorProps) => {
	const SelectorIcon = () => (
		<div className="flex items-center gap-2 px-2">
			<GlobeIcon size={20} />
			{locale.toUpperCase()}
		</div>
	)

	return (
		<Menu
			align="bottom-right"
			routes={[
				{ href: "/en", label: "EN" },
				{ href: "/ru", label: "RU" },
			]}
			openIcon={<SelectorIcon />}
			closeIcon={<SelectorIcon />}
		/>
	)
}
