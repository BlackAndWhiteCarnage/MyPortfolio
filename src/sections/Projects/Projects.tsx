/**
 * External dependencies
 */
import { FC } from 'react';

/**
 * Internal dependencies
 */
import { Poster, Slider } from '@/components';
import classes from './Projects.module.scss';

const Projects: FC = () => (
	<div className={classes.wrapper} id="projects">
		<Slider>
			<Poster
				image={{
					src: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					alt: '',
				}}
				onClick={() => {}}
			/>
			<Poster
				image={{
					src: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					alt: '',
				}}
				onClick={() => {}}
			/>
			<Poster
				image={{
					src: 'https://images.unsplash.com/photo-1601645191163-3fc0d5d64e35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
					alt: '',
				}}
				onClick={() => {}}
			/>
		</Slider>
	</div>
);

export default Projects;
