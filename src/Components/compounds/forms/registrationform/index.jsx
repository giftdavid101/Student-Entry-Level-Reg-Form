import React from 'react';
import Card from "../../../atoms/Card";
import './registrationform.style.scss'
import {Formik, Field, Form, ErrorMessage} from "formik";

import {RegValidation} from "./validation_for_registrationform";


const RegistrationForm = () => (
        <div className="registration-form">
            <h1>Registration Form</h1>
            <span className="text-info"><i>application for Jss1 student only</i></span>
            <Card>
                <Formik
                    initialValues={{
                        fullName: '',
                        gender:'',
                        dob: '',
                        age:'',
                        religion:'',
                        phoneNo:'',
                        stateOfOrigin:'',
                        address:''

                    } }
                    validateOnChange={true}
                    validateOnMount={true}
                    validationSchema={RegValidation}
                    onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 1000);

                    }}>
                    {({handleSubmit, handleChange,
                          handleBlur,
                          isValid, isSubmitting,
                          errors,
                          values,
                          getFieldProps,
                          touched}) => (
                        <Form className="registration-form__Form" onSubmit={handleSubmit}>

                             <div className="registration-form__input-field-container">
                                 <div className="registration-form__input-field">
                                 <p className="registration-form__input-title">Full Name:</p>
                                 <Field type="text"
                                       name="fullName"
                                       disabled={isSubmitting}
                                       placeholder='Enter your full name here...'
                                       className={`form-control ${(errors.fullName)? 'is-invalid': ''}`}
                                       onBlur={handleBlur}
                                    value={values.fullName}
                                 /><ErrorMessage name="fullName"/>
                                 </div>

                             </div>
                            <div className="registration-form__input-field">
                                <p className="registration-form__input-title">Gender:</p>
                                <div className="gender-container">
                                <div className="">
                                    <span>Male</span>
                                    <Field type="radio"
                                        name="gender"
                                        disabled={isSubmitting}
                                        className={`form--control-radio ${(errors.gender)? 'is-invalid': ''}`}
                                        onBlur={handleBlur}
                                        value="Male"
                                     />

                                </div>
                                <div className="">
                                    <span>Female</span>
                                     <Field type="radio"
                                       name="gender"
                                       disabled={isSubmitting}
                                       className={`form--control-radio ${(errors.gender)? 'is-invalid': ''}`}
                                       value="Female"
                                    />

                                </div>
                                </div>

                             </div>

                            <div className="input-field">
                                <p className="registration-form__input-title">Date of birth:</p>

                                <Field type="date"
                                       name="dob"
                                       disabled={isSubmitting}
                                       placeholder='Enter your full name...'
                                       className={`form-control ${(errors.dob)? 'is-invalid': ''}`}
                                       onBlur={handleBlur}
                                       value={values.dob}
                                />
                                <ErrorMessage name="dob"/>
                            </div>
                            
                            <div className="input-field">
                                <p className="registration-form__input-title"> Age:</p>
                                <Field type="number"
                                       name="age"
                                       disabled={isSubmitting}
                                       placeholder='Enter your full age..'
                                       className={`form-control ${(errors.age)? 'is-invalid': ''}`}
                                       onBlur={handleBlur}
                                       value={values.dob}
                                />
                                <ErrorMessage name="age"/>
                            </div>
                             <div className="input-field">
                                <p className="registration-form__input-title"> Phone Number</p>
                                <Field type="number"
                                       name="phoneNumber"
                                       disabled={isSubmitting}
                                       placeholder='Enter your phone number..'
                                       className={`form-control ${(errors.dob)? 'is-invalid': ''}`}
                                       onBlur={handleBlur}
                                       value={values.dob}
                                />
                                <ErrorMessage name="phoneNo"/>
                            </div>
                             <div className="input-field">
                                <p> State of origin</p>
                                <Field type="text"
                                       name="age"
                                       disabled={isSubmitting}
                                       placeholder='Enter your state of origin...'
                                       className={`form-control ${(errors.stateOfOrigin)? 'is-invalid': ''}`}
                                       onBlur={handleBlur}
                                       value={values.stateOfOrigin}
                                />
                                <ErrorMessage name="stateOfOrigin"/>
                            </div>
                              
                           <div className="input-field">
                                <p> Address</p>
                                <Field type="text"
                                       name="age"
                                       disabled={isSubmitting}
                                       placeholder='Enter yourhome address.'
                                       className={`form-control ${(errors.address)? 'is-invalid': ''}`}
                                       onBlur={handleBlur}
                                       value={values.address}
                                />
                                <ErrorMessage name="address"/>
                            </div>


                            <button
                                className="button-submit"
                                type="submit"
                                // disabled={getDisabledState(isSubmitting, isValid)}
                                disabled={isSubmitting}
                            >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </Card>
   </div>


);

export default RegistrationForm;