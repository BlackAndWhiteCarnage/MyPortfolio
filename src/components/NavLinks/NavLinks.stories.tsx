/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { navLinks } from '@/config';
import NavLinks from '.';

export default {
	title: 'Components/NavLinks',
	component: NavLinks,
	argTypes: {
		links: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '27.125rem',
					height: '30rem',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof NavLinks>;

export const Default: StoryObj<typeof NavLinks> = {
	args: {
		links: navLinks,
	},
};
