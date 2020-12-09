import * as Yup from 'yup';

export const RegValidation =  Yup.object({
        fullName: Yup.string()
            .min(2, 'Must be more than 2 characters')
            .required('Full Name is required')
            .matches(/^([\w]{3,})+\s+([\w\s]{3,})+$/i, {
                message: 'Please enter your last name, first name and middle name separated with a space',
                excludeEmptyString: false
            }),
        gender: Yup.string().required('please select your gender'),
        dob: Yup.string().required('Your date of birth is required'),
        age: Yup.string().required('Your age is required'),
        religion: Yup.string().required('please select your religion'),
        phoneNo: Yup.string().required('Phone number is required')
                             .max(11, 'Your Phone Number is invalid'),
        stateOfOrigin: Yup.string().required('Your state of origin is required'),
        address: Yup.string().required('Home address is required'),
        parentOrGuardiansName: Yup.string().required('input full name'),
        parentOrGuardiansAddress: Yup.string().required('input your parents or guardians home address'),
        parentOrGuardiansPhoneNo: Yup.string().required('phone number required'),


    })
