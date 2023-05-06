/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import classes from './List.module.scss';

type ListProps = {
	items: Array<string>;
	variant?: 'primary' | 'secondary';
};

const cx = classnames.bind(classes);

const List: FC<ListProps> = ({ items, variant = 'primary' }) => (
	<ol className={cx('wrapper', `${variant}-variant`)}>
		{items.map((value, index) => (
			<li key={index} className={cx('item', 'is-style-text')}>
				{value}
			</li>
		))}
	</ol>
);

export default List;
