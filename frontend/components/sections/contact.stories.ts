import { Contact } from "@/components/sections/contact"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Contact> = {
	title: "Cleopatra/Sections/Contact",
	component: Contact,
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
