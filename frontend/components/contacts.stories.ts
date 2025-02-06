import { Contacts } from "@/components/contacts"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Contacts> = {
	title: "Cleopatra/Components/Contacts",
	component: Contacts,
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
