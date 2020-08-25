import * as yup from 'yup';



const registerFormSchema = yup.object().shape({
    name: yup
            .string()
            .required('Must enter name.')
            .min(2, 'Name must be at least 2 characters.'),
    username: yup
                .string()
                .required('Must enter usename.')
                .min(4, 'Username must be between 4 and 12 characters.')
                .max(12, 'Username must be between 4 and 12 characters.'),
    password: yup 
                .string()
                .required('Must enter password.')
                .min(6, 'Password must be at least 6 characters.'),
    confirm:  yup
                .string()
                .required('Must confirm password.')
                .min(6, 'Password must be at least 6 characters.'),
    email:  yup
                .string()
                .required('Must provide an email address.')
                .email("Must enter a valid email address."),
    age:    yup
                .number()
                .integer('Must enter a valid age')
                .required('Must enter your age to continue.')
                .min(21, 'You must be 21 years or older to register an account')
                .typeError('Must enter a valid integer'),
    tos:    yup
                .boolean()
                .oneOf([true], 'You must accept the terms and conditions to continue.')
                .required('You must accept the terms and conditions to continue.')
})

export default registerFormSchema;