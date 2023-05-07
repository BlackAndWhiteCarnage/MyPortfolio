/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import Atropos from 'atropos/react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './Slider.module.scss';

type SliderProps = {
	children: Array<ReactElement>;
	className?: string;
	variant?: 'primary' | 'secondary';
} & SwiperProps;

const cx = classnames.bind(classes);

const Slider: FC<SliderProps> = ({
	children,
	className,
	variant = 'primary',
	...props
}) => {
	const isPrimaryVariant = variant === 'primary';

	const swiper = (
		<Swiper
			modules={[Pagination, Autoplay]}
			className={classes.swiperWrapper}
			slidesPerView="auto"
			centeredSlides
			direction={isPrimaryVariant ? 'horizontal' : 'vertical'}
			pagination={{
				clickable: true,
			}}
			initialSlide={1}
			slideToClickedSlide={isPrimaryVariant}
			autoplay={
				!isPrimaryVariant && {
					delay: 1200,
				}
			}
			{...props}
		>
			{children.map((item, index) => (
				<SwiperSlide key={index} className={classes.slideWrapper}>
					{({ isActive, isNext, isPrev }) => (
						<div
							className={cx('slide', {
								isActive,
								isNext,
								isPrev,
							})}
						>
							{item}
						</div>
					)}
				</SwiperSlide>
			))}
		</Swiper>
	);

	return (
		<div className={cx('wrapper', `is-${variant}-variant`, className)}>
			{isPrimaryVariant ? (
				<Atropos
					rotateTouch="scroll-y"
					rotateYMax={6}
					rotateXMax={6}
					shadow={false}
					highlight={false}
					className={classes.innerWrap}
				>
					{swiper}
				</Atropos>
			) : (
				swiper
			)}
		</div>
	);
};

export default Slider;
