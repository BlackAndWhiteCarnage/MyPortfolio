/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Button, List } from '@/components';
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { ReactComponent as DocumentIcon } from '@/icons/file.svg';
import { skills } from '@/config';
import classes from './AboutMe.module.scss';
import resume from '@/files/resume.pdf';

const cx = classnames.bind(classes);

const AboutMe: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.about}>
			<h2 id="about-me" className={classes.title}>
				About Me
			</h2>
			<p className={cx('description', 'is-style-text')}>
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
				<Button
					position="left"
					icon={DocumentIcon}
					href={resume}
					target="_blank"
				>
					My Resume
				</Button>
			</div>
		</div>
		<div className={classes.skills}>
			<h2 id="about-me" className={classes.title}>
				My Skills
			</h2>
			<List
				items={skills}
				variant="secondary"
				className={classes.skillsList}
			/>
		</div>
	</div>
);

export default AboutMe;
