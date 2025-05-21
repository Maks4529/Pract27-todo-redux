import { ErrorMessage, Field, Form, Formik } from "formik";
import { createMessage } from "../../store/slices/TodoListSlice";
import { connect } from "react-redux";
import { MESSAGE_VALIDATION_SCHEMS } from "../../utils/validationSchems";
import styles from './TodoForm.module.sass';

function TodoForm({createNewMessage}) {
  const initialValues = {
    message: '',
  };

  const submitHandler = (values, formikBag) => {
    createNewMessage(values);
    formikBag.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={submitHandler} validationSchema={MESSAGE_VALIDATION_SCHEMS}>
      <Form className={styles.form}>
        <label>
          <Field className={styles.input} name="message" type="text" placeholder="New task..." autoFocus/>
          <ErrorMessage className={styles.error} name="message" component="span" />
        </label>
        <button className={styles.subBtn} type="submit">Add</button>
      </Form>
    </Formik>
  )
};

const mapDispatchToProps = dispatch => ({
  createNewMessage: (data) => dispatch(createMessage(data)),
});

export default connect (null, mapDispatchToProps) (TodoForm);