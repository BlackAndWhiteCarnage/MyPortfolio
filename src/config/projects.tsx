/**
 * Internal dependencies
 */
import IPhonePoster from '@/assets/images/iphone-poster.jpg';
import IPhoneScreenshot from '@/assets/images/iphone-screenshot.png';
import LaMiaPassioneMaltesePoster from '@/assets/images/la-mia-passione-maltese-poster.jpg';
import LaMiaPassioneMalteseScreenshot from '@/assets/images/la-mia-passione-maltese-screenshot.jpg';
import MyCharmingDollsPoster from '@/assets/images/my-charming-dolls-poster.jpg';
import MyCharmingDollsScreenshot from '@/assets/images/my-charming-dolls-screenshot.jpg';

const projects = [
	{
		title: 'IPhone 13',
		description: `It's a simple website for an IPhone 13, once I was learning react-three-fiber and this came out from my wings. The code is ugly and now, after this time, I know that most things could be done better. Right now I don't wanna waste my time on polishing this project 'cause I've gave up learning this library for now. It's just "pretty"!`,
		features: [
			"Toggle between different IPhone colors and pretty much that's it. It's just a layout and most important part for me then was to learn something from react-three-fiber",
		],
		reposytoryUrl: 'https://github.com/BlackAndWhiteCarnage/IPhone13',
		liveUrl: 'https://friendly-carson-a22302.netlify.app/',
		usedTools: [
			'react',
			'styled-components',
			'react-three',
			'react-intersection-observer',
		],
		posterImage: IPhonePoster,
		screenshotImage: IPhoneScreenshot,
	},
	{
		title: 'La Mia Passione Maltese',
		description: `My parent's had a website but it was made by my father in some kind of website editor so... UI and UX wasn't really friendly and it looked like taken from 2000 year. Also some things just didn't work. It's a one page website so it's pretty simple. There is a couple of basic sections like: "About us", "Our dogs", "Exhibitions", "Buying process", "Faq" and of course "Contact". My main goal was to make it interesting and vivid. Personally I think that a good website is a website which will drill into your mind for a while.`,
		features: [
			'Toggle between different years in "Exhibitions section"',
			'Toggle answers in "Faq section"',
			'Email sending (emailjs) with form validation (react-hook-form)',
			'Popover usage (popperjs)',
			'Cool animations (framer-motion)',
			'Stories (storybook)',
		],
		reposytoryUrl:
			'https://github.com/BlackAndWhiteCarnage/La-Mia-Passione-Maltese-V2',
		liveUrl: 'https://lamiapassionemaltese.pl/',
		usedTools: [
			'react',
			'storybook',
			'scss',
			'css-modules',
			'framer-motion',
			'react-intersection-observer',
			'emailjs',
			'react-popper',
			'react-hook-form',
		],
		posterImage: LaMiaPassioneMaltesePoster,
		screenshotImage: LaMiaPassioneMalteseScreenshot,
	},
	{
		title: 'My Charming Dolls',
		description:
			"I proudly present a fully operational website dedicated to my wife's business of selling custom Blythe dolls. Personally, I am thrilled to have been able to provide her with such a meaningful gift. 😁",
		features: [
			'Payments (stripe)',
			'Marking products with webhook as sold after successful payment',
			'Strapi Backend',
			'Images are hosted on Cloudinary',
			'Slider (swiper)',
			'Sending email with (emailjs)',
			'Form validation with (react-hook-form)',
			'Stories (storybook)',
			'All "readable" data from Strapi is in markdown format (react-markdown)',
		],
		reposytoryUrl:
			'https://github.com/BlackAndWhiteCarnage/MyCharmingDolls',
		liveUrl: 'https://my-charming-dolls.vercel.app/',
		usedTools: [
			'next.js',
			'emailjs',
			'atropos',
			'scss',
			'css-modules',
			'react-markdown',
			'graphql',
			'strapi',
			'stripe',
			'react-popper',
			'react-hook-form',
			'framer-motion',
			'react-intersection-observer',
		],
		posterImage: MyCharmingDollsPoster,
		screenshotImage: MyCharmingDollsScreenshot,
	},
];

export default projects;
