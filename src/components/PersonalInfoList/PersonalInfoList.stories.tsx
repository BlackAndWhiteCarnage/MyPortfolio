/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { personalInfo } from '@/config';
import PersonalInfoList from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Components/PersonalInfoList',
	component: PersonalInfoList,
	argTypes: {
		items: disable,
		className: disable,
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
