/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Button, List } from '@/components';
import { ReactComponent as DocumentIcon } from '@/assets/icons/file.svg';
import { knownSkills, workedWith, tools, aboutMe } from '@/config';
import classes from './AboutMe.module.scss';
import resume from '@/assets/files/resume.pdf';

const cx = classnames.bind(classes);

const AboutMe: FC = () => {
	const getSkillsList = (label: string, skills: Array<string>) => (
		<div>
			<h2 className={classes.title}>{label}</h2>
			<List
				items={skills}
				variant="secondary"
				className={classes.skillsList}
			/>
		</div>
	);

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
							icon={DocumentIcon}
							href={resume}
							target="_blank"
						>
							My Resume
						</Button>
					</div>
				</div>
				{getSkillsList(
					'Technologies that I know for sure:',
					knownSkills
				)}
				{getSkillsList("Stuff that I've worked with:", workedWith)}
				{getSkillsList("Tolls that I'm using everyday:", tools)}
			</div>
		</>
	);
};

export default AboutMe;
