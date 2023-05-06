/**
 * External dependencies
 */
import { ArgsStoryFn } from '@storybook/types';
import { ComponentProps } from 'react';
import { ReactRenderer, StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Button } from '@/components';
import { usePopup } from '@/hooks';
import Popup from '.';

export default {
	title: 'Components/Popup',
	component: Popup,
} satisfies Meta<typeof Popup>;

const PopupStory: ArgsStoryFn<ReactRenderer, ComponentProps<typeof Popup>> = (
	args
) => {
	const popup = usePopup();

	return (
		<>
			<Popup {...popup} {...args} />
			<Button onClick={() => popup.open()} position="left">
				Open Popup
			</Button>
		</>
	);
};

const children = (
	<div>
		{new Array(50).fill(
			<>
				<p>content here</p>
				<br />
			</>
		)}
	</div>
);

export const Default: StoryObj<typeof Popup> = {
	render: PopupStory,
	args: {
		children,
		title: 'Project Name Here!',
	},
};

export const WithoutTitle: StoryObj<typeof Popup> = {
	render: PopupStory,
	args: {
		children,
	},
};