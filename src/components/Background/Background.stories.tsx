/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as HeroLandscape } from '@/images/hero-landscape.svg';
import { ReactComponent as HeroPortrait } from '@/images/hero-portrait.svg';
import Background from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Components/Background',
	component: Background,
	argTypes: {
		landscape: disable,
		portrait: disable,
	},
} satisfies Meta<typeof Background>;

export const Default: StoryObj<typeof Background> = {
	args: {
		landscape: HeroLandscape,
		portrait: HeroPortrait,
	},
};
