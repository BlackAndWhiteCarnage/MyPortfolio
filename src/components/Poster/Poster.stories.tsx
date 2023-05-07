/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import Poster from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Components/Poster',
	component: Poster,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '31.25rem',
					height: '15.25rem',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		image: disable,
		onClick: disable,
	},
} satisfies Meta<typeof Poster>;

export const Default: StoryObj<typeof Poster> = {
	args: {
		image: {
			src: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
			alt: '',
		},
	},
};
