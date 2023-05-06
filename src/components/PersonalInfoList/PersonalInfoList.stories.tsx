/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { personalInfo } from '@/config';
import PersonalInfoList from '.';

export default {
	title: 'Components/PersonalInfoList',
	component: PersonalInfoList,
	argTypes: {
		items: {
			table: {
				disable: true,
			},
		},
	},
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '22.5rem',
				}}
			>
				<Story />
			</div>
		),
	],
} satisfies Meta<typeof PersonalInfoList>;

export const Default: StoryObj<typeof PersonalInfoList> = {
	args: {
		items: personalInfo,
	},
};
