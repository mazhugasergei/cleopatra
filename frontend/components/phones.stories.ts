import { Phones } from "@/components/phones"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Phones> = {
	title: "Cleopatra/Components/Phones",
	component: Phones,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		ref: {
			table: { disable: true },
			control: false,
		},
		className: {
			table: { disable: true },
			control: false,
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
	args: {
		className: "aspect-[1/1]",
	},
}
