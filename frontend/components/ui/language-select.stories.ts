import { LanguageSelect } from "@/components/ui/language-select"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof LanguageSelect> = {
	title: "Cleopatra/Layout/LanguageSelect",
	component: LanguageSelect,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
