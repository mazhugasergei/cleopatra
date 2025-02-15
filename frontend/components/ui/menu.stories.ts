import { Menu } from "@/components/ui/menu"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Menu> = {
	title: "Cleopatra/Layout/Menu",
	component: Menu,
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
