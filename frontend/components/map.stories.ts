import { Map } from "@/components/map"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Map> = {
	title: "Cleopatra/Components/Map",
	component: Map,
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
