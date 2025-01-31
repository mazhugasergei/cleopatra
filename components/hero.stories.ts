import { Hero } from "@/components/hero"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Hero> = {
	title: "Hero",
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

const defaultArgs: Partial<Story["args"]> = {}

export const Default: Story = {
	args: {
		...defaultArgs,
	},
}
