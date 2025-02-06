import { Services } from "@/components/sections/services"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Services> = {
	title: "Cleopatra/Sections/Services",
	component: Services,
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
