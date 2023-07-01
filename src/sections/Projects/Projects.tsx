/**
 * External dependencies
 */
import { FC, useState } from 'react';

/**
 * Internal dependencies
 */
import { Popup, Poster, ProjectDescription, Slider } from '@/components';
import { projects } from '@/config';
import { ReactComponent as HeroLandscape } from '@/images/hero-about-me-landscape.svg';
import { ReactComponent as HeroPortrait } from '@/images/hero-about-me-portrait.svg';
import { usePopup } from '@/hooks';
import classes from './Projects.module.scss';

const Projects: FC = () => {
	const [activeProject, setActiveProject] = useState('');

	const popup = usePopup();

	return (
		<>
			<div className={classes.wrapper} id="projects">
				<Slider>
					{projects.map(({ title, image }, index) => (
						<Poster
							image={image}
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
						image,
						reposytoryUrl,
						usedTools,
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
							description={description}
							features={features}
							image={image}
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
