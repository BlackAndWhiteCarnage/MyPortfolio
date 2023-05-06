/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { ButtonProps } from './Button';
import Button from '.';

export default {
	title: 'Components/Button',
	component: Button,
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
