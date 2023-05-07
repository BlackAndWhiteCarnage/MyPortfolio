/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Background } from '@/components';
import { ReactComponent as HeroLandscape } from '@/images/hero-landscape.svg';
import { ReactComponent as HeroPortrait } from '@/images/hero-portrait.svg';
import classes from './Root.module.scss';
import PaperLayer from '@/images/paper.jpg';

const Root: FC = () => (
	<>
		<img src={PaperLayer} alt="" className={classes.paperLayer} />
		<div className={classes.comicLayer} />
		<Background
			animation="rotate"
			landscape={HeroLandscape}
			portrait={HeroPortrait}
		/>
	</>
);

export default Root;
