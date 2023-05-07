/**
 * External dependencies
 */
import { FC, PropsWithChildren, useEffect } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Portal } from '@/components';
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { usePopup } from '@/hooks';
import classes from './Popup.module.scss';

type UsePopupReturn = ReturnType<typeof usePopup>;

export type PopupProps = PropsWithChildren<
	{
		title?: string;
	} & UsePopupReturn
>;

const cx = classnames.bind(classes);

const Popup: FC<PopupProps> = ({ children, close, isOpen = true, title }) => {
	useEffect(() => {
		document.documentElement.style.overflowY = isOpen ? 'hidden' : 'auto';
	}, [isOpen]);

	return (
		<Portal>
			<div
				className={cx('popup', {
					'has-title': title,
					'is-open': isOpen,
				})}
				onClick={({ target }) => {
					(target as HTMLElement).classList.contains(classes.popup) &&
						close();
				}}
			>
				<button
					className={classes.close}
					tabIndex={isOpen ? 0 : -1}
					onClick={close}
				>
					<ArrowIcon className={classes.icon} />
				</button>
				{title && (
					<div className={classes.header}>
						{title && (
							<h1 className={cx('title', 'is-style-h1')}>
								{title}
							</h1>
						)}
					</div>
				)}
				<div className={classes.content}>{children}</div>
			</div>
		</Portal>
	);
};

export default Popup;
