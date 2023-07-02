/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { NavLinks } from '@/components';
import { navLinks } from '@/config';
import classes from './Navigation.module.scss';
import Me from '@/assets/images/me.jpg';

const Navigation: FC = () => (
	<div className={classes.wrapper}>
		<img
			src={Me}
			alt="comic like poster with Krzysztof Repsch face"
			className={classes.image}
		/>
		<div className={classes.links}>
			<NavLinks links={navLinks} />
		</div>
	</div>
);

export default Navigation;
