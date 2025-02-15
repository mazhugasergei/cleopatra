import { LanguageSelector } from "@/components/ui/language-selector"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LanguageSelector> = {
	title: "Cleopatra/Layout/LanguageSelector",
	component: LanguageSelector,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		ref: {
			table: { disable: true },
			control: false,
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
