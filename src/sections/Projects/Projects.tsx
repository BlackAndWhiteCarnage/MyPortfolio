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
		<span className={classes.info}>
			Please be informed that I have recently been fully engaged in
			professional commitments, which have limited my time for personal
			projects. Consequently, I believe that the code I previously
			authored may not accurately reflect my current skill set. However, I
			am excited to announce that I'm currently in the process of
			enhancing my previous projects. They will be published soon,
			showcasing my current capabilities. In the meantime, I invite you to
			visit my{' '}
			<a
				className={classes.link}
				href="https://github.com/BlackAndWhiteCarnage"
				target="_blank"
				rel="noreferrer"
			>
				GitHub profile
			</a>{' '}
			where you can explore my past and upcoming projects.
		</span>
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
