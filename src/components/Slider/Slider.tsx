/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide, SwiperProps } from 'swiper/react';
import classnames from 'classnames/bind';
import Atropos from 'atropos/react';

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

const Slider: FC<SliderProps> = ({ children, className, ...props }) => {
	return (
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
						<SwiperSlide
							key={index}
							className={classes.slideWrapper}
						>
							{({ isActive, isNext, isPrev }) => (
								<div
									className={cx('slide', {
										middleSlide: isActive,
										rightSlide: isNext,
										leftSlide: isPrev,
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
};

export default Slider;
