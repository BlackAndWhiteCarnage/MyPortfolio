/**
 * External dependencies
 */
import { FC, PropsWithChildren, useEffect } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Portal } from '@/components';
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow.svg';
import { usePopup } from '@/hooks';
import classes from './Popup.module.scss';
import { SVGIcon } from '@/types';

type UsePopupReturn = ReturnType<typeof usePopup>;

export type PopupProps = PropsWithChildren<
	{
		landscapeBackround: SVGIcon;
		portraitBackround: SVGIcon;
		title?: string;
	} & UsePopupReturn
>;

const cx = classnames.bind(classes);

const Popup: FC<PopupProps> = ({
	children,
	landscapeBackround: Landscape,
	portraitBackround: Portrait,
	close,
	isOpen = true,
	title,
}) => {
	useEffect(() => {
		document.documentElement.style.overflowY = isOpen ? 'hidden' : 'auto';

		return () => {
			document.documentElement.style.overflowY = 'auto';
		};
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
				<div className={classes.background}>
					<div className={classes.innerBackround}>
						<Landscape className={classes.landscape} />
						<Portrait className={classes.portrait} />
					</div>
				</div>
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
