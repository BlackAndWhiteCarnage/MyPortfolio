/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { ReactComponent as DocumentIcon } from '@/icons/file.svg';
import { Button, Slider, Poster } from '@/components';
import classes from './AboutMe.module.scss';

const AboutMe: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.about}>
			<h2 id="about-me">About Me</h2>
			<p>
				I wonder if someone ever reads "About Me". That's cool if you
				are a recruiter who's actually doing that. I've heard that you
				have something like 30 seconds to check resume and portfolio of
				each candidate. But! If you are already reading this line I'm
				pretty sure that you became interested in my portfolio. So
				without unnecessary dummy talking I'd rather provide you with
				something about me, unless you want only a bare facts. Then just
				click my resume. Social cream is going to be on the next button.
			</p>
			<div className={classes.buttons}>
				<Button position="left" icon={ArrowIcon}>
					Read More
				</Button>
				<Button position="left" icon={DocumentIcon}>
					My Resume
				</Button>
			</div>
		</div>
		<div className={classes.skills}>
			<h2 id="about-me">My Skills</h2>
		</div>
	</div>
);

export default AboutMe;
