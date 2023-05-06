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
};

const cx = classnames.bind(classes);

const OrderedList: FC<OrderedListProps> = ({ items }) => (
	<ol className={classes.wrapper}>
		{items.map((value, index) => (
			<li key={index} className={cx('item', 'is-style-text')}>
				{value}
			</li>
		))}
	</ol>
);

export default OrderedList;
