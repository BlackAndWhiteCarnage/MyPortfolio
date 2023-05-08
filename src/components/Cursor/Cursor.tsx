/**
 * External dependencies
 */
import { FC, useRef, useEffect, useState, useCallback } from 'react';
import classnames from 'classnames/bind';

/**
 * External dependencies
 */
import { ReactComponent as Bang } from '@/icons/bang.svg';
import { ReactComponent as HandDefault } from '@/icons/hand-default.svg';
import { ReactComponent as HandPointer } from '@/icons/hand-pointer.svg';
import { ReactComponent as HandWaiting } from '@/icons/hand-waiting.svg';
import { ReactComponent as HandWave } from '@/icons/hand-wave.svg';
import { ReactComponent as Ouch } from '@/icons/ouch.svg';
import { ReactComponent as Typescript } from '@/icons/typescript.svg';
import classes from './Cursor.module.scss';

const cx = classnames.bind(classes);

const clickableTags = ['A', 'BUTTON', 'INPUT', 'TEXTAREA', 'LABEL'];

let toggleInterval: NodeJS.Timeout;

const Cursor: FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	const [cursorState, setCursorState] = useState('wave');
	const [feedbackState, setFeedbackState] = useState('');
	const [isWaiting, setIsWaiting] = useState(false);

	const move = useCallback(
		(e: MouseEvent) => {
			setIsWaiting(false);
			clearTimeout(toggleInterval);

			toggleInterval = setTimeout(() => setIsWaiting(true), 2000);

			if (ref.current) {
				ref.current.style.top = e.clientY + 'px';
				ref.current.style.left = e.clientX + 'px';
			}

			if (cursorState === 'wave') return;

			setCursorState(
				clickableTags.includes((e.target as HTMLElement).tagName)
					? 'pointer'
					: 'default'
			);
		},
		[cursorState]
	);

	const click = (e: MouseEvent) => {
		setIsWaiting(false);
		setFeedbackState(
			clickableTags.includes((e.target as HTMLElement).tagName)
				? 'bang'
				: 'ouch'
		);

		setTimeout(() => setFeedbackState(''), 300);
	};

	useEffect(() => {
		window.addEventListener('mousemove', move);
		window.addEventListener('click', click);

		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('click', click);
		};
	}, [move]);

	useEffect(() => {
		window.location.href.indexOf('portfoliorepsch') !== -1 &&
			document
				.querySelectorAll('*')
				.forEach((el) => ((el as HTMLElement).style.cursor = 'none'));
		setTimeout(() => setCursorState('default'), 2000);
	}, []);

	return !window.matchMedia('(pointer: coarse)').matches ? (
		<div
			ref={ref}
			className={cx(
				'wrapper',
				`state-${cursorState}`,
				`feedback-${feedbackState}`,
				{
					isWaiting,
				}
			)}
		>
			<div className={classes.inner}>
				<HandDefault className={cx('hand', 'hand-default')} />
				<HandWave className={cx('hand', 'hand-wave')} />
				<HandPointer className={cx('hand', 'hand-pointer')} />
				<HandWaiting className={cx('hand-waiting')} />
				<Typescript className={classes.icon} />
				<div className={classes.feedbackWrapper}>
					<Bang className={cx('feedback', 'bang')} />
					<Ouch className={cx('feedback', 'ouch')} />
				</div>
			</div>
		</div>
	) : null;
};

export default Cursor;
