/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import { Pagination } from 'swiper';
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
} & SwiperProps;

const cx = classnames.bind(classes);

const Slider: FC<SliderProps> = ({ children, className, ...props }) => (
	<div className={cx('wrapper', className)}>
		<Atropos
			rotateTouch="scroll-y"
			rotateYMax={6}
			rotateXMax={6}
			shadow={false}
			highlight={false}
			className={classes.innerWrap}
		>
			<Swiper
				modules={[Pagination]}
				className={classes.swiperWrapper}
				slidesPerView="auto"
				centeredSlides
				pagination={{
					clickable: true,
				}}
				initialSlide={1}
				slideToClickedSlide
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
		</Atropos>
	</div>
);

export default Slider;
