import { Header } from "@/components/layout/header"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Header> = {
	title: "Cleopatra/Layout/Header",
	component: Header,
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
