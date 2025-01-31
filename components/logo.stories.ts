import { Logo } from "@/components/logo"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Logo> = {
	title: "Logo",
	component: Logo,
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
