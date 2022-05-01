import "./Form.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import formSchema from "../../validation/formSchema";
import SubmitButton from "./SubmitButton";

export default function MyForm() {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };
  const isValid = true;
  function onSubmit(values, { setSubmitting }) {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
    }, 2000);
  }
  return (
    <div className="user">
      <Formik
        initialValues={initialValues}
        validationSchema={formSchema}
        onSubmit={onSubmit}
        isValid={isValid}
        validateOnBlur={false}
      >
        {({ isValid, touched }) => (
          <Form
            className={
              "form" +
              (isValid || Object.keys(touched).length < 3 ? "" : " error")
            }
          >
            <div className="form__group">
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="form_input"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form__group">
              <Field
                name="email"
                type="text"
                placeholder="Email address"
                className="form_input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form__group">
              <Field
                name="phone"
                type="phone"
                placeholder="Phone address"
                className="form_input"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="error-message"
              />
            </div>

            <SubmitButton />
          </Form>
        )}
      </Formik>
    </div>
  );
}
