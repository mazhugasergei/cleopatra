import { Carousel } from "@/components/carousel"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Carousel> = {
	title: "Carousel",
	component: Carousel,
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

const defaultArgs: Partial<Story["args"]> = {}

export const Default: Story = {
	args: {
		...defaultArgs,
	},
}
