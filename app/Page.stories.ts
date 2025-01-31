import type { Meta, StoryObj } from "@storybook/react"
import Page from "./page"

const meta: Meta<typeof Page> = {
	title: "Page",
	component: Page,
	parameters: {
		layout: "fullscreen",
	},
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
