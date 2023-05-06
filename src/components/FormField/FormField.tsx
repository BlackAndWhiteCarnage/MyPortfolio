/**
 * External dependencies
 */
import { ErrorMessage } from '@hookform/error-message';
import { RegisterOptions, useFormContext, useFormState } from 'react-hook-form';
import classnames from 'classnames/bind';

/**
 * Internal dependencies
 */
import classes from './FormField.module.scss';

const cx = classnames.bind(classes);

type FormFieldProps<T> = {
	label?: string;
	name: T;
	type: 'input' | 'textarea';
	validation?: RegisterOptions;
};

const FormField = <T extends string>({
	label,
	name,
	type,
	validation,
}: FormFieldProps<T>) => {
	const formContext = useFormContext();
	const { errors } = useFormState();

	const className = cx('field', 'is-style-text', type, {
		'has-error': errors?.email,
	});

	return (
		<div className={classes.wrapper}>
			{label && (
				<label htmlFor={name} className={cx('label', 'is-style-text')}>
					{label}
				</label>
			)}
			<div className={classes.formField}>
				{type === 'input' ? (
					<input
						id={name}
						type="text"
						className={className}
						{...formContext.register(name, validation)}
					/>
				) : (
					<textarea
						className={className}
						{...formContext.register(name, validation)}
					/>
				)}
				<ErrorMessage
					errors={errors}
					name={name}
					render={({ message }) => (
						<p className={cx('error', 'is-style-text-small')}>
							{message}
						</p>
					)}
				/>
			</div>
		</div>
	);
};

export default FormField;
