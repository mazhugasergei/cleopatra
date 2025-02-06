import { About } from "@/components/sections/about"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof About> = {
	title: "Cleopatra/Sections/About",
	component: About,
	parameters: {
		layout: "fullscreen",
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
