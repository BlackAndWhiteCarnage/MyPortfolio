/**
 * External dependencies
 */
import { StoryObj } from '@storybook/react';

/**
 * Internal dependencies
 */
import { Poster } from '@/components';
import Slider from '.';

export default {
	title: 'Components/Slider',
	component: Slider,
};

export const Default: StoryObj<typeof Slider> = {
	args: {
		children: new Array(9).fill(
			<Poster
				image={{
					src: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					alt: '',
				}}
				onClick={() => {}}
			/>
		),
	},
};
