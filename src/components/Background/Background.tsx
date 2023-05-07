/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { SVGIcon } from '@/types';
import classes from './Background.module.scss';

type BackgroundProps = {
	animation: 'scale' | 'rotate';
	landscape: SVGIcon;
	portrait: SVGIcon;
};

const cx = classnames.bind(classes);

const Background: FC<BackgroundProps> = ({
	animation = 'rotate',
	landscape: Landscape,
	portrait: Portrait,
}) => (
	<div className={cx('wrapper', `has-${animation}-animation`)}>
		<Landscape className={classes.landscape} />
		<Portrait className={classes.portrait} />
	</div>
);

export default Background;
