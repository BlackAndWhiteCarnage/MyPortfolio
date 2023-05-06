/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
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
} satisfies Meta<typeof NavLinks>;

export const Default: StoryObj<typeof NavLinks> = {
	args: {
		links: [
			{
				label: 'About me',
				href: '#about-me',
			},
			{
				label: 'Projects',
				href: '#projects',
			},
			{
				label: 'Contact',
				href: '#contact',
			},
		],
	},
};
