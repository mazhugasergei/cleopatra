import { Banks } from "@/components/banks"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Banks> = {
	title: "Cleopatra/Components/Banks",
	component: Banks,
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
