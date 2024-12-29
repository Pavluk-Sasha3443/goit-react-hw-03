import css from "./ContactForm.module.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";

const ContactForm = ({ handleSubmit }) => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .min(3, "Мінімум 3 символів ")
      .max(40, "Масимум 40 символів")
      .required("Поле має бути обов'яково заповнене"),
    number: yup
      .string()
      .matches(/^[\d-]+$/, "Тільки цифри")
      .min(3, "Мінімум 3 символів")
      .max(50, "Масимум 40 символів")
      .required("Поле має бути обов'яково заповнене"),
  });

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          id: "",
          name: "",
          number: "",
        }}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <label htmlFor="name">Name</label>
          <Field className={css.input} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
          <label htmlFor="number">Number</label>
          <Field className={css.input} type="tel" name="number" id="number" />
          <ErrorMessage className={css.error} name="number" component="span" />
          <button className={css.btnForm} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
