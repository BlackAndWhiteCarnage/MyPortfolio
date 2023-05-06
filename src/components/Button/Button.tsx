/**
 * External dependencies
 */
import { ButtonHTMLAttributes, AnchorHTMLAttributes, FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Button.module.scss';
import { SVGIcon } from '@/types';

const cx = classnames.bind(classes);

type BaseButtonProps = {
	icon?: SVGIcon;
	position: 'left' | 'right';
};

type RealButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type AnchorButtonProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export type ButtonProps = BaseButtonProps &
	(RealButtonProps | AnchorButtonProps);

const AnchorButton: FC<AnchorButtonProps> = (props) => (
	<a {...props}>{props.children}</a>
);

const RealButton: FC<RealButtonProps> = ({ ...props }) => <button {...props} />;

const hasAnchorProps = (props: any): props is AnchorButtonProps => !!props.href;
const hasButtonProps = (props: any): props is RealButtonProps => !props.href;

const Button: FC<ButtonProps> = ({
	children,
	className,
	icon: Icon,
	position,
	...props
}) => {
	const buttonClassName = cx(
		className,
		'button',
		'is-style-text-large',
		position
	);

	const buttonIcon = Icon && <Icon className={classes.icon} />;

	return hasAnchorProps(props) ? (
		<AnchorButton {...props} className={buttonClassName}>
			{children}
			{buttonIcon}
		</AnchorButton>
	) : hasButtonProps(props) ? (
		<RealButton {...props} className={buttonClassName}>
			{children}
			{buttonIcon}
		</RealButton>
	) : null;
};

export default Button;
