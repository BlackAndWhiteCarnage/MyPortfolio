/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { ReactComponent as FacebookIcon } from '@/icons/facebook.svg';
import { ButtonProps } from './Button';
import Button from '.';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		icon: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof Button>;

const DefaultProps: ButtonProps = {
	children: 'Click me!',
	position: 'right',
};

export const Default: StoryObj<typeof Button> = {
	args: {
		...DefaultProps,
	},
};

export const WithIcon: StoryObj<typeof Button> = {
	args: {
		...DefaultProps,
		icon: ArrowIcon,
	},
};

export const Anchor: StoryObj<typeof Button> = {
	args: {
		...DefaultProps,
		href: 'https://www.google.pl/',
		target: '_blank',
	},
};

export const IconOnly: StoryObj<typeof Button> = {
	args: {
		icon: FacebookIcon,
		position: 'left',
		iconedButton: true,
	},
};
