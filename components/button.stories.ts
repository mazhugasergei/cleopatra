import { Button, defaultVariants, variants } from "@/components/button"
import type { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Button> = {
	title: "Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		children: {
			description: "Button content",
			table: {
				type: { summary: "React.ReactNode" },
			},
		},
		variant: {
			control: { type: "select" },
			options: Object.keys(variants.variant),
			description: "Variant of the button",
			table: {
				type: { summary: `"${Object.keys(variants.variant).join('" | "')}"` },
				defaultValue: { summary: `"${defaultVariants.size}"` },
			},
		},
		size: {
			control: { type: "select" },
			options: Object.keys(variants.size),
			description: "Size of the button",
			table: {
				type: { summary: `"${Object.keys(variants.size).join('" | "')}"` },
				defaultValue: { summary: `"${defaultVariants.size}"` },
			},
		},
		ref: {
			table: { disable: true },
			control: false,
		},
	},
}

export default meta
type Story = StoryObj<typeof meta>

const defaultArgs: Partial<Story["args"]> = {
	children: "Button",
	variant: "default",
	size: "default",
}

export const Default: Story = {
	args: {
		...defaultArgs,
		variant: "default",
	},
}

export const Destructive: Story = {
	args: {
		...defaultArgs,
		variant: "destructive",
	},
}

export const Outline: Story = {
	args: {
		...defaultArgs,
		variant: "outline",
	},
}

export const Secondary: Story = {
	args: {
		...defaultArgs,
		variant: "secondary",
	},
}

export const Ghost: Story = {
	args: {
		...defaultArgs,
		variant: "ghost",
	},
}

export const Link: Story = {
	args: {
		...defaultArgs,
		variant: "link",
	},
}

export const Small: Story = {
	args: {
		...defaultArgs,
		size: "sm",
	},
}

export const Large: Story = {
	args: {
		...defaultArgs,
		size: "lg",
	},
}
