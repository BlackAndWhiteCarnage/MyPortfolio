/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import classes from './Story.module.scss';
import Cursor from '.';

export default {
	title: 'Components/Cursor',
	component: Cursor,
	argTypes: {
		items: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div className={classes.wrapper}>
				<Story />
				<button>Button</button>
				<input />
				<a>anchor</a>
			</div>
		),
	],
} satisfies Meta<typeof Cursor>;

export const Default: StoryObj<typeof Cursor> = {
	args: {},
};
