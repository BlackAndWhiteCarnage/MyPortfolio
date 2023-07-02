/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Button, List, Popup } from '@/components';
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow.svg';
import { ReactComponent as DocumentIcon } from '@/assets/icons/file.svg';
import { ReactComponent as HeroLandscape } from '@/assets/images/hero-secondary-landscape.svg';
import { ReactComponent as HeroPortrait } from '@/assets/images/hero-secondary-portrait.svg';
import { skills, aboutMe, moreAboutMe } from '@/config';
import { usePopup } from '@/hooks';
import classes from './AboutMe.module.scss';
import resume from '@/assets/files/resume.pdf';

const cx = classnames.bind(classes);

const AboutMe: FC = () => {
	const popup = usePopup();

	return (
		<>
			<div className={classes.wrapper} id="about-me">
				<div className={classes.about}>
					<h2 className={classes.title}>About Me</h2>
					<p className={cx('description', 'is-style-text')}>
						{aboutMe}
					</p>
					<div className={classes.buttons}>
						<Button
							position="left"
							icon={ArrowIcon}
							onClick={popup.open}
						>
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
			<Popup
				{...popup}
				landscapeBackround={HeroLandscape}
				portraitBackround={HeroPortrait}
			>
				<article className={classes.moreAboutMe}>{moreAboutMe}</article>
			</Popup>
		</>
	);
};

export default AboutMe;
