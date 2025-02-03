import { Tabs } from "@/components/tabs"
import type { Meta, StoryObj } from "@storybook/react"
import { TabsContent } from "./tabs-content"

const meta: Meta<typeof Tabs> = {
	title: "Tabs",
	component: Tabs,
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

export const Default: Story = {
	args: {
		data: [
			{
				name: "Tab 1",
				content: (
					<TabsContent
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Vestibulum auctor, elit ut vulputate consequat, augue erat suscipit urna, et volutpat est justo sit amet felis. Nam non lacus nec ligula consequat pharetra. Proin sed dui ut risus interdum interdum. Cras sed justo vitae tortor congue vehicula. Suspendisse potenti. Integer dignissim, nisl et vestibulum luctus, lorem ipsum sodales purus, sed dictum libero elit vel ex."
						image="https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
					/>
				),
			},
			{
				name: "Tab 2",
				content: (
					<TabsContent
						description="Fusce interdum, justo a auctor gravida, nulla erat venenatis ligula, nec fermentum turpis ex id nisl. Etiam tincidunt, odio et dapibus malesuada, felis nunc tempor enim, eget feugiat orci libero eget mauris. Phasellus imperdiet, sapien nec efficitur tincidunt, tortor libero condimentum quam, sed facilisis metus est non ligula. Nam eget nunc vel risus pharetra suscipit. Duis pharetra, libero nec accumsan facilisis, urna ligula sagittis elit, eget tincidunt libero ligula vel elit."
						image="https://cdn.britannica.com/79/232779-050-6B0411D7/German-Shepherd-dog-Alsatian.jpg"
					/>
				),
			},
			{
				name: "Tab 3",
				content: (
					<TabsContent
						description="Curabitur nec metus eu libero varius convallis. In hac habitasse platea dictumst. Sed tristique, justo vel convallis pellentesque, erat neque dignissim odio, sit amet varius nulla erat ut ligula. Aenean accumsan, velit a cursus facilisis, lacus nunc egestas nulla, ac ultricies libero neque nec risus. Integer sit amet posuere felis. Mauris nec tortor ut magna dictum feugiat. Ut id ipsum at justo tincidunt tempus."
						image="https://pettownsendvet.com/wp-content/uploads/2023/01/iStock-1052880600.jpg"
					/>
				),
			},
		],
	},
}
