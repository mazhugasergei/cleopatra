import { Footer } from "@/components/layout/footer"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Footer> = {
	title: "Cleopatra/Layout/Footer",
	component: Footer,
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
