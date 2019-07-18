import React from "react";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const Login = ({ values, errors, touched, isSubmitting }) => {
  return (
    <Form>
      <div>
        <Field type="text" name="username" placeholder="Username" />
        <p>{touched.username && errors.username}</p>
      </div>
      <div>
        <Field type="password" name="password" placeholder="Password" />
        <p>{touched.password && errors.password}</p>
      </div>
      <button disabled={isSubmitting}>Submit it</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => {
    return {
      username: "",
      password: ""
    };
  },
  handleSubmit: (values, formikBag) => {
    console.log("handle values", values);
    const url = "http://localhost:5000/api/login";
    axios
      .post(url, values)
      .then(res => {
        console.log("Res", res);
        localStorage.setItem("token", res.data.payload);
        // formikBag.props.history.push("/profile")
      })
      .catch(err => {
        console.log(err);
      });
  }
})(Login);
