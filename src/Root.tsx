/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { AboutMe, Contact, Projects, Navigation } from '@/sections';
import { Background, Button, Cursor } from '@/components';
import { ReactComponent as HeroLandscape } from '@/images/hero-landscape.svg';
import { ReactComponent as HeroPortrait } from '@/images/hero-portrait.svg';
import { socialIcons } from './config';
import classes from './Root.module.scss';
import PaperLayer from '@/images/paper.jpg';

const Root: FC = () => (
	<>
		<img src={PaperLayer} alt="" className={classes.paperLayer} />
		<div className={classes.comicLayer} />
		<Cursor />
		<Background
			animation="rotate"
			landscape={HeroLandscape}
			portrait={HeroPortrait}
		/>
		<div className={classes.content}>
			<div className={classes.socialLinks}>
				{socialIcons.map(({ icon, href }, index) => (
					<Button
						key={index}
						iconedButton
						position="right"
						icon={icon}
						href={href}
						target="_blank"
					/>
				))}
			</div>
			<Navigation />
			<AboutMe />
			<Projects />
			<Contact />
		</div>
	</>
);

export default Root;
