/**
 * External dependencies
 */
import { FC, useRef, useEffect, useState } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { ReactComponent as Bang } from '@/assets/icons/bang.svg';
import { ReactComponent as Ouch } from '@/assets/icons/ouch.svg';
import classes from './Cursor.module.scss';

const cx = classnames.bind(classes);

const clickableTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'LABEL'];

const Cursor: FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	const [feedbackState, setFeedbackState] = useState('');

	const click = (e: MouseEvent) => {
		if (ref.current) {
			ref.current.style.top = e.clientY + 'px';
			ref.current.style.left = e.clientX + 'px';
		}

		setFeedbackState(
			clickableTags.includes((e.target as HTMLElement).tagName)
				? 'bang'
				: 'ouch'
		);

		setTimeout(() => setFeedbackState(''), 200);
	};

	useEffect(() => {
		window.addEventListener('click', click);

		return () => window.removeEventListener('click', click);
	}, []);

	return (
		<div ref={ref} className={cx('wrapper', `feedback-${feedbackState}`)}>
			<div className={classes.inner}>
				<div className={classes.feedbackWrapper}>
					<Bang className={cx('feedback', 'bang')} />
					<Ouch className={cx('feedback', 'ouch')} />
				</div>
			</div>
		</div>
	);
};

export default Cursor;
