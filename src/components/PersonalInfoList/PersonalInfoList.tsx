/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { SVGIcon } from '@/types';
import classes from './PersonalInfoList.module.scss';

export type PersonalInfoListProps = {
	className?: string;
	items: Array<{
		href?: string;
		icon?: SVGIcon;
		label: string;
	}>;
};

const cx = classnames.bind(classes);

const PersonalInfoList: FC<PersonalInfoListProps> = ({ className, items }) => {
	const getContent = (content: string, Icon: SVGIcon | undefined) => (
		<>
			{content}
			{Icon && <Icon className={classes.icon} />}
		</>
	);

	return (
		<ul className={cx('items', className, 'is-style-text-large')}>
			{items.map(({ label, href, icon: Icon }, index) => (
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
