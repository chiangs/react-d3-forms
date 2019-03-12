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
			valid: false,
			required: true,
			minLength: 3
		}
	},
	email: {
		label: 'Email',
		hint: 'Remember the `@` and `.domain`',
		elementType: 'input',
		elementConfig: {
			type: 'email'
		},
		value: 'testest@test.test',
		validation: {
			valid: false,
			email: true,
			required: true
		}
	},
	password: {
		label: 'Choose Password',
		hint: 'Minimum 6 characters',
		elementType: 'password',
		elementConfig: {
			type: 'password',
			hidden: true
		},
		value: '',
		validation: {
			valid: false,
			required: true,
			minLength: 6
		}
	}
};
