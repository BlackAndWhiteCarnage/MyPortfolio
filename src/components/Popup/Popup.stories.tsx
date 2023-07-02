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
import { ReactComponent as HeroLandscape } from '@/images/assets/hero-secondary-landscape.svg';
import { ReactComponent as HeroPortrait } from '@/images/assets/hero-secondary-portrait.svg';
import Popup from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Components/Popup',
	component: Popup,
	argTypes: {
		landscapeBackround: disable,
		portraitBackround: disable,
		children: disable,
		open: disable,
		toggle: disable,
		close: disable,
	},
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
		landscapeBackround: HeroLandscape,
		portraitBackround: HeroPortrait,
		children,
		title: 'Project Name Here!',
	},
};

export const WithoutTitle: StoryObj<typeof Popup> = {
	render: PopupStory,
	args: {
		landscapeBackround: HeroLandscape,
		portraitBackround: HeroPortrait,
		children,
	},
};
