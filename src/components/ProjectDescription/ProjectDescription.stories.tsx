/**
 * External dependencies
 */
import { StoryObj, Meta, StoryFn } from '@storybook/react';

/**
 * Internal dependencies
 */
import {
	PrimaryProps as FeaturesProps,
	SecondaryProps as UsedToolsProps,
} from '@/components/List/List.stories';
import ProjectDescription from '.';

const disable = {
	table: {
		disable: true,
	},
};

export default {
	title: 'Components/ProjectDescription',
	component: ProjectDescription,
	decorators: [
		(Story: StoryFn) => (
			<div
				style={{
					maxWidth: '59.375rem',
				}}
			>
				<Story />
			</div>
		),
	],
	argTypes: {
		features: disable,
		usedTools: disable,
		image: disable,
	},
} satisfies Meta<typeof ProjectDescription>;

export const Default: StoryObj<typeof ProjectDescription> = {
	args: {
		image: {
			src: 'https://raw.githubusercontent.com/BlackAndWhiteCarnage/La-Mia-Passion-Maltese/main/readmeImages/1.png',
			alt: 'La Mia Passione Maltese',
		},
		liveUrl: 'https://lamiapassionemaltese.pl/',
		reposytoryUrl:
			'https://github.com/BlackAndWhiteCarnage/La-Mia-Passion-Maltese',
		usedTools: UsedToolsProps,
		features: FeaturesProps,
		description:
			"This project is basically my wife's website, for a while she was only using Allegro for selling worn underwear until I started learning programming. There are a couple reasons why I've made this project but most important ones are: no commission on the sale and she doesn't care about their stupid terms of use, by that I mean (all images on business account must be on rgba(255,255,255) background) which doesn't encourage clients at all. Creating a fully working shop with a couple of nice features was pretty and what is most exciting, GREAT FUN! Besides, I've learned lots of useful things and the project is still under development to meet the currently emerging needs.",
	},
};
