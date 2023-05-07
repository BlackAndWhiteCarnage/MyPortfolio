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
	className?: string;
	items: Array<string>;
	variant?: 'primary' | 'secondary';
};

const cx = classnames.bind(classes);

const List: FC<ListProps> = ({ className, items, variant = 'primary' }) => (
	<ol className={cx('wrapper', className, `${variant}-variant`)}>
		{items.map((value, index) => (
			<li key={index} className={cx('item', 'is-style-text')}>
				{value}
			</li>
		))}
	</ol>
);

export default List;
