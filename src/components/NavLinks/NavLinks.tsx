/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * External dependencies
 */
import { LinkData } from '@/types';
import classes from './NavLinks.module.scss';
import Button from '../Button/Button';

type NavLinksProps = {
	links: Array<LinkData>;
};

const NavLinks: FC<NavLinksProps> = ({ links }) => (
	<ul className={classes.wrapper}>
		{links.map(({ label, href }) => (
			<li>
				<Button href={href} position="right">
					{label}
				</Button>
			</li>
		))}
	</ul>
);

export default NavLinks;
