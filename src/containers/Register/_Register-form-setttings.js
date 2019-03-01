export const RegisterForm = {
	fullName: {
		label: 'Full Name',
		hint: 'What is your full name?',
		elementType: 'input',
		elementConfig: {
			type: 'text'
		},
		value: '',
		validation: {
			required: true,
			minLength: 3
		}
	},
	email: {
		label: 'Email',
		hint: 'Remember the `@` and `.domain` such as `.com`',
		elementType: 'input',
		elementConfig: {
			type: 'email'
		},
		value: '',
		validation: {
			required: true
		}
	},
	password: {
		label: 'Choose Password',
		hint: 'Minimum 6 characters',
		elementType: 'input',
		elementConfig: {
			type: 'password'
		},
		value: '',
		validation: {
			required: true,
			minLength: 6
		}
	}
};
