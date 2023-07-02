/**
 * External dependencies
 */
import { FC, useState } from 'react';

/**
 * Internal dependencies
 */
import { Popup, Poster, ProjectDescription, Slider } from '@/components';
import { projects } from '@/config';
import { ReactComponent as HeroLandscape } from '@/assets/images/hero-secondary-landscape.svg';
import { ReactComponent as HeroPortrait } from '@/assets/images/hero-secondary-portrait.svg';
import { usePopup } from '@/hooks';
import classes from './Projects.module.scss';

const Projects: FC = () => {
	const [activeProject, setActiveProject] = useState('');

	const popup = usePopup();

	return (
		<>
			<div className={classes.wrapper} id="projects">
				<Slider>
					{projects.map(({ title, posterImage }, index) => (
						<Poster
							image={{
								src: posterImage,
								alt: `${title}, comic like poster`,
							}}
							key={index}
							onClick={() => setActiveProject(title)}
						/>
					))}
				</Slider>
			</div>
			{projects.map(
				(
					{
						title,
						description,
						features,
						screenshotImage,
						reposytoryUrl,
						usedTools,
						liveUrl,
					},
					index
				) => (
					<Popup
						{...popup}
						key={index}
						landscapeBackround={HeroLandscape}
						portraitBackround={HeroPortrait}
						title={title}
						isOpen={activeProject === title}
						close={() => setActiveProject('')}
					>
						<ProjectDescription
							liveUrl={liveUrl}
							description={description}
							features={features}
							image={{
								src: screenshotImage,
								alt: `screenshot from ${title} website`,
							}}
							reposytoryUrl={reposytoryUrl}
							usedTools={usedTools}
						/>
					</Popup>
				)
			)}
		</>
	);
};

export default Projects;
