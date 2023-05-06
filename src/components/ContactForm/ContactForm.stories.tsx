/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import ContactForm from '.';

export default {
	title: 'Components/ContactForm',
	component: ContactForm,
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
} satisfies Meta<typeof ContactForm>;

export const Default: StoryObj<typeof ContactForm> = {};
