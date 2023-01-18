import React from 'react';
import { Formik, Form, Field } from 'formik';
import { signUpSchema } from '../../utils/signUpSchema';
import FormikInput from '../../components/FormikInput';
import * as styles from './styles.module.css';
import MainButton from '../../components/mainbutton/MainButton';

const initialValues = {
  email: '',
  password: '',
  passwordtwo: ''
};

const SignUp = () => {
  return (
    <div className={styles.formContainer}>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}>
        {({ errors, touched }) => (
          <Form>
            <Field
              label="Email"
              placeholder="Enter your email"
              name="email"
              type="email"
              component={FormikInput}
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field
              label="Password"
              placeholder="Enter your password"
              name="password"
              type="password"
              component={FormikInput}
            />
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            <Field
              label="Password"
              placeholder="Enter your password again"
              name="passwordtwo"
              type="password"
              component={FormikInput}
            />
            {errors.passwordtwo && touched.passwordtwo ? <div>{errors.passwordtwo}</div> : null}
            <div className={styles.btnContainer}>
              <MainButton>Login</MainButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUp;
