/**
 * External dependencies
 */
import { StoryObj, Meta } from '@storybook/react';

/**
 * Internal dependencies
 */
import OrderedList from '.';

export default {
	title: 'Components/OrderedList',
	component: OrderedList,
	argTypes: {
		items: {
			table: {
				disable: true,
			},
		},
	},
} satisfies Meta<typeof OrderedList>;

export const Default: StoryObj<typeof OrderedList> = {
	args: {
		items: [
			'Different main color after each refresh',
			'Adding products to the cart',
			'Choosing different extras for each product (two of them are for free, after adding more add 10PLN to product price for each), (if available), (for premium panties extras are unlimited and for free)',
			'Get different discounts on cart value (150PLN - 5%, 250PLN - 10%, 500PLN - 15%), (some photo sessions are excluded from discounts, still they will cause discounts on other products that can be discounted)',
			'Send your order via form with validation (my wife will get all the information about it via email) (links to products images from AWS, extras someone choose to each product and total cart value).',
		],
	},
};
