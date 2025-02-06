import { Socials } from "@/components/socials"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Socials> = {
	title: "Cleopatra/Components/Socials",
	component: Socials,
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
