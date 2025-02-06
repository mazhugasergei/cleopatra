import { Hero } from "@/components/sections/hero"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Hero> = {
	title: "Cleopatra/Sections/Hero",
	component: Hero,
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
