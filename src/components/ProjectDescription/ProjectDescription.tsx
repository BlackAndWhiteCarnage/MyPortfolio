/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Button, List } from '@/components';
import { ImageData } from '@/types';
import { ReactComponent as GithubIcon } from '@/assets/icons/github.svg';
import { ReactComponent as LinkIcon } from '@/assets/icons/link.svg';
import classes from './ProjectDescription.module.scss';

type ProjectDescriptionProps = {
	description: string;
	features: Array<string>;
	image: ImageData;
	liveUrl?: string;
	reposytoryUrl: string;
	usedTools: Array<string>;
};

const cx = classnames.bind(classes);

const ProjectDescription: FC<ProjectDescriptionProps> = ({
	description,
	features,
	image: { src, alt },
	liveUrl,
	reposytoryUrl,
	usedTools,
}) => {
	const getTitledContent = (title: string, content: ReactElement) => (
		<>
			<h3 className={cx('title', 'is-style-h2')}>{title}</h3>
			{content}
		</>
	);

	return (
		<div className={classes.wrapper}>
			<img src={src} alt={alt} className={classes.image} />
			<div className={classes.links}>
				{liveUrl && (
					<Button
						position="left"
						href={liveUrl}
						target="_blank"
						icon={LinkIcon}
					>
						Live
					</Button>
				)}
				<Button
					position="left"
					href={reposytoryUrl}
					target="_blank"
					icon={GithubIcon}
				>
					Reposytory
				</Button>
			</div>
			{getTitledContent(
				'Used tools:',
				<List items={usedTools} variant="secondary" />
			)}
			{getTitledContent(
				'About Project:',
				<p className={cx('description', 'is-style-text')}>
					{description}
				</p>
			)}
			{getTitledContent('Features:', <List items={features} />)}
		</div>
	);
};

export default ProjectDescription;
