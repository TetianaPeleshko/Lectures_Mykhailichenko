import { Form, Field, Formik, ErrorMessage } from 'formik';

import '../FormComponent/formcomponent.scss';

export default function FormikForm() {
  const submitForm = (values) => {
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};

    if (!values.firstName) {
      errors.firstName = 'Required!';
    }
    return errors;
  };

  return (
    <>
      <Formik
        initialValues={{
          firstName: 'Tata', //початкове значення
          surName: 'Pel',
          country: '',
        }}
        validate={validate}
        onSubmit={submitForm}
      >
        <Form className="form">
          <span>First Name:</span>
          <Field type="text" name="firstName" />
          <ErrorMessage name="firstName" />

          <span>Surname:</span>
          <Field type="text" name="surName" />

          <span>English</span>
          <Field type="checkbox" name="engLanguage" />

          <span>Ukrainian</span>
          <Field type="checkbox" name="ukrLanguage" />

          <span>Country</span>
          <Field as="select" name="country">
            <option>Ukraine</option>
            <option>Canada</option>
            <option>Germany</option>
          </Field>

          <button type="submit">Sign in</button>
        </Form>
      </Formik>
    </>
  );
}
