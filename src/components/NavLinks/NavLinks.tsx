/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * External dependencies
 */
import { Button } from '@/components';
import { LinkData } from '@/types';
import classes from './NavLinks.module.scss';

type NavLinksProps = {
	links: Array<LinkData>;
};

const NavLinks: FC<NavLinksProps> = ({ links }) => (
	<ul className={classes.wrapper}>
		{links.map(({ label, href }, index) => (
			<li key={index}>
				<Button href={href} position="right">
					{label}
				</Button>
			</li>
		))}
	</ul>
);

export default NavLinks;
