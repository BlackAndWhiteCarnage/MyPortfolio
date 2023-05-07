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
import { ReactComponent as ArrowIcon } from '@/icons/arrow.svg';
import { ReactComponent as QrCode } from '@/images/qr-code.svg';
import classes from './Contact.module.scss';

const cx = classnames.bind(classes);

const Contact: FC = () => (
	<div className={classes.wrapper}>
		<div className={classes.form}>
			<ContactForm />
		</div>
		<div className={classes.personalInfo}>
			<h2 className={classes.title}>Personal Info</h2>
			<PersonalInfoList items={personalInfo} />
			<div className={classes.other}>
				<div className={classes.qrCode}>
					<QrCode className={classes.code} />
					<span className={cx('info', 'is-style-text')}>
						Don't scan this!
					</span>
				</div>
				<Button position="right" icon={ArrowIcon}>
					This portfolio reposytory
				</Button>
				<Button position="right" icon={ArrowIcon}>
					Check out my reference
				</Button>
			</div>
		</div>
	</div>
);

export default Contact;
