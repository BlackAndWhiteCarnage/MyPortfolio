/**
 * External dependencies
 */
import { FC, useState } from 'react';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import classnames from 'classnames/bind';
import emailjs from 'emailjs-com';

/**
 * Internal dependencies
 */
import { Button, FormField } from '@/components';
import { ReactComponent as PlaneIcon } from '@/assets/icons/plane.svg';
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

	const methods = useForm<ContactFormFields>();

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
		<FormProvider {...methods}>
			<form
				className={classes.wrapper}
				onSubmit={methods.handleSubmit(onSubmit)}
			>
				{submitdFeedback && (
					<div className={cx('submitFeedback', submitdFeedback.type)}>
						<p className={cx('is-style-h2')}>
							{submitdFeedback.message}
						</p>
					</div>
				)}
				<FormField
					name="email"
					type="input"
					label="Email"
					validation={{
						required: 'Email is required.',
						pattern: {
							value: /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
							message: 'Email is invalid',
						},
					}}
				/>
				<FormField
					name="message"
					type="textarea"
					label="Message"
					validation={{
						required: 'Message is required.',
						pattern: {
							value: /^[\s\S]{30,}$/,
							message:
								'Message must contain at least 30 characters.',
						},
					}}
				/>
				<Button position="left" icon={PlaneIcon} type="submit">
					Send message!
				</Button>
			</form>
		</FormProvider>
	);
};

export default ContactForm;
