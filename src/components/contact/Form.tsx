import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { initialValues, handleSubmit, validationSchema } from "./formValues";

import styles from "../../styles/contact/form.module.css";

const transitionConfig = {
  type: "spring",
  duration: 1,
  bounce: 0.65,
};

const viewportConfig = {
  once: true,
  margin: "0px 0px -100px 0px",
};

const FormContact = () => {
  return (
    <form
      action="https://formspree.io/f/mgvwkazr"
      method="POST"
      className={styles.formContainer}
    >
      <div className={styles.fieldsContainer}>
        <label className={styles.label}>Tu email:</label>

        <input
          type="email"
          name="email"
          required
          className={styles.input}
        ></input>
      </div>

      <div className={styles.fieldsContainer}>
        <label className={styles.label}>Mensaje:</label>

        <textarea
          name="message"
          required
          className={styles.textarea}
        ></textarea>
      </div>

      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
};

export default FormContact;
