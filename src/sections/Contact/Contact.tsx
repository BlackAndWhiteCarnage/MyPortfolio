/**
 * External dependencies
 */
import { FC } from 'react';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import { Button, ContactForm, PersonalInfoList } from '@/components';
import { personalInfo } from '@/config';
import { ReactComponent as ArrowIcon } from '@/assets/icons/arrow.svg';
import { ReactComponent as QrCode } from '@/assets/images/qr-code.svg';
import classes from './Contact.module.scss';
import reference from '@/assets/files/reference.pdf';

const cx = classnames.bind(classes);

const Contact: FC = () => (
	<div className={classes.wrapper} id="contact">
		<div className={classes.form}>
			<ContactForm />
		</div>
		<div className={classes.personalInfo}>
			<h2 className={classes.title}>Personal Info</h2>
			<PersonalInfoList
				items={personalInfo}
				className={classes.personalInfoList}
			/>
			<div className={classes.other}>
				<div className={classes.qrCode}>
					<QrCode className={classes.code} />
					<span className={cx('info', 'is-style-text')}>
						Don't scan this!
					</span>
				</div>
				<Button
					position="right"
					icon={ArrowIcon}
					href="https://github.com/BlackAndWhiteCarnage/MyPortfolio"
					target="_blank"
				>
					This portfolio reposytory
				</Button>
				<Button
					position="right"
					icon={ArrowIcon}
					href={reference}
					target="_blank"
				>
					Check out my reference
				</Button>
			</div>
		</div>
	</div>
);

export default Contact;
