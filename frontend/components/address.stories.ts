import { Address } from "@/components/address"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Address> = {
	title: "Cleopatra/Components/Address",
	component: Address,
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

export const WithLinks: Story = {
	args: {
		withLinks: true,
	},
}
