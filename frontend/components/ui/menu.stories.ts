import { NavMenu } from "@/components/ui/nav-menu"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof NavMenu> = {
	title: "Cleopatra/Layout/NavMenu",
	component: NavMenu,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
