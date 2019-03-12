import { useState } from 'react';

const useForm = (initialValues, callback) => {
	const [values, setValues] = useState(initialValues);

	const handleSubmit = event => {
		if (event) event.preventDefault();
		callback(values);
	};

	const handleChange = (event, inputIdentifier) => {
		event.persist();
		setValues(values => ({
			...values,
			[inputIdentifier]: event.target.value
		}));
	};

	const resetForm = event => {
		event.persist();
		if (event) event.preventDefault();
		setValues({ ...initialValues });
	};

	return {
		values,
		handleSubmit,
		handleChange,
		resetForm
	};
};

export default useForm;
