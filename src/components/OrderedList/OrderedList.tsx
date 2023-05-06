/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import classes from './OrderedList.module.scss';

type OrderedListProps = {
	items: Array<string>;
	variant?: 'primary' | 'secondary';
};

const cx = classnames.bind(classes);

const OrderedList: FC<OrderedListProps> = ({ items, variant = 'primary' }) => (
	<ol className={cx('wrapper', `${variant}-variant`)}>
		{items.map((value, index) => (
			<li key={index} className={cx('item', 'is-style-text')}>
				{value}
			</li>
		))}
	</ol>
);

export default OrderedList;
