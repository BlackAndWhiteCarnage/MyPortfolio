/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { ImageData } from '@/types';
import classes from './Poster.module.scss';

type PosterProps = {
	image: ImageData;
	onClick?: () => void;
	variant?: 'primary' | 'secondary';
};

const cx = classnames.bind(classes);

const Poster: FC<PosterProps> = ({
	image: { src, alt },
	onClick,
	variant = 'primary',
}) => {
	const className = cx('wrapper', `is-${variant}-variant`);
	const image = <img src={src} alt={alt} className={classes.image} />;

	return onClick ? (
		<button className={cx('button', className)} onClick={onClick}>
			{image}
		</button>
	) : (
		<div className={className}>{image}</div>
	);
};

export default Poster;
