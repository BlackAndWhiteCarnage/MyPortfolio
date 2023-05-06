/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as UserIcon } from '@/icons/user.svg';
import { ReactComponent as ShoeIcon } from '@/icons/shoe.svg';
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
		items: [
			{
				label: 'Krzysztof Repsch',
				icon: UserIcon,
			},
			{
				label: 'krzys.repsch@gmail.com',
				href: 'mailto:krzys.repsch@gmail.com',
			},
			{
				label: '603 312 504',
				href: 'tel:603-312-504',
			},
			{
				label: 'Shoe size 45/46',
				icon: ShoeIcon,
			},
		],
	},
};
