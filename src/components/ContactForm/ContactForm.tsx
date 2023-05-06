/**
 * External dependencies
 */
import { ErrorMessage } from '@hookform/error-message';
import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import classnames from 'classnames/bind';
import emailjs from 'emailjs-com';

/**
 * Internal dependencies
 */
import { Button } from '@/components';
import { ReactComponent as PlaneIcon } from '@/icons/plane.svg';
import classes from './ContactForm.module.scss';

const cx = classnames.bind(classes);

type ContactFormFields = {
	email: string;
	message: string;
};

const ContactForm: FC = () => {
	const [submitdFeedback, setSubmitFeedback] = useState<{
		type: string;
		message: string;
	} | null>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ContactFormFields>();

	const onSubmit: SubmitHandler<ContactFormFields> = (data) => {
		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID!,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID!,
				data,
				process.env.REACT_APP_EMAILJS_USER!
			)
			.then(
				(result) => {
					result.status === 200 &&
						setSubmitFeedback({
							type: 'success',
							message:
								"Email was send! I'll respond as soon as I can! 💪",
						});
				},
				(error) => {
					error &&
						setSubmitFeedback({
							type: 'error',
							message:
								'Something went wrong. Please try again later or contact me via Linkedin! 🙈',
						});
				}
			);
	};

	return (
		<form className={classes.wrapper} onSubmit={handleSubmit(onSubmit)}>
			{submitdFeedback && (
				<div className={cx('submitFeedback', submitdFeedback.type)}>
					<p className={cx('is-style-h2')}>
						{submitdFeedback.message}
					</p>
				</div>
			)}
			<label htmlFor="email" className={cx('label', 'is-style-text')}>
				Email
			</label>
			<div className={classes.formField}>
				<input
					id="email"
					type="text"
					className={cx('field', 'is-style-text', {
						'has-error': errors?.email,
					})}
					{...register('email', {
						required: 'Email is required.',
						pattern: {
							value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
							message: 'Email is invalid',
						},
					})}
				/>
				<ErrorMessage
					errors={errors}
					name="email"
					render={({ message }) => (
						<p className={cx('error', 'is-style-text-small')}>
							{message}
						</p>
					)}
				/>
			</div>
			<div className={classes.formField}>
				<label
					htmlFor="message"
					className={cx('label', 'is-style-text')}
				>
					Message
				</label>
				<textarea
					id="message"
					className={cx('field', 'textarea', 'is-style-text', {
						'has-error': errors?.message,
					})}
					{...register('message', {
						required: 'Message is required.',
						pattern: {
							value: /^[\s\S]{30,}$/,
							message:
								'Message must contain at least 30 characters.',
						},
					})}
				/>
				<ErrorMessage
					errors={errors}
					name="message"
					render={({ message }) => (
						<p className={cx('error', 'is-style-text-small')}>
							{message}
						</p>
					)}
				/>
			</div>
			<Button position="left" icon={PlaneIcon} type="submit">
				Send message!
			</Button>
		</form>
	);
};

export default ContactForm;
