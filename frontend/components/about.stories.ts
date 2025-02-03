import { About } from "@/components/about"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof About> = {
	title: "About",
	component: About,
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
