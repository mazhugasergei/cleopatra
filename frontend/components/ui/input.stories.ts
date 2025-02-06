import { Input } from "@/components/ui/input"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Input> = {
	title: "Cleopatra/UI/Input",
	component: Input,
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

const defaultArgs: Partial<Story["args"]> = {
	placeholder: "Placeholder",
}

export const Text: Story = {
	args: {
		...defaultArgs,
		type: "text",
	},
}

export const Number: Story = {
	args: {
		...defaultArgs,
		type: "number",
	},
}

export const Password: Story = {
	args: {
		...defaultArgs,
		type: "password",
	},
}

export const Date: Story = {
	args: {
		...defaultArgs,
		type: "date",
	},
}
