/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { ReactComponent as ArrowIcon } from '@/icons/arrow-circle.svg';
import { SVGIcon } from '@/types';
import classes from './PersonalInfoList.module.scss';

type PersonalInfoListProps = {
	items: Array<{
		href?: string;
		icon?: SVGIcon;
		label: string;
	}>;
};

const cx = classnames.bind(classes);

const PersonalInfoList: FC<PersonalInfoListProps> = ({ items }) => {
	const getContent = (content: string, Icon: SVGIcon) => (
		<>
			{content}
			<Icon className={classes.icon} />
		</>
	);

	return (
		<ul className={cx('items', 'is-style-text-large')}>
			{items.map(({ label, href, icon: Icon = ArrowIcon }, index) => (
				<li key={index}>
					{href ? (
						<a
							href={href}
							target="_blank"
							rel="noreferrer"
							className={cx('item', 'link')}
						>
							{getContent(label, Icon)}
						</a>
					) : (
						<span className={classes.item}>
							{getContent(label, Icon)}
						</span>
					)}
				</li>
			))}
		</ul>
	);
};

export default PersonalInfoList;
