import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import ErrorModal from "../../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../../../shared/hooks/http-hook";
import "./auth.css";
import jwt_decode from "jwt-decode";

function LoginForm(props) {
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  // Handling sign in with google
  function googleCallBackResponseHandler(response) {
    console.log("jwt token", response.credential);
    let userObject = jwt_decode(response.credential);
    console.log(userObject);
  }
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id:
        "838879790668-013q6bp66h7kqtbjckmm68et0vgtfcr7.apps.googleusercontent.com",
      callback: googleCallBackResponseHandler,
    });
    google.accounts.id.renderButton(document.getElementById("googleSignin"), {
      theme: "filled_blue",
      size: "large",
      shape: "pill",
      width: "350",
    });
  }, []);
  // Handling sign in with google

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
  });
  const history = useHistory();
  const onSubmit = async (values) => {
    try {
      const logInResponseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/login",
        "POST",
        JSON.stringify({
          email: values.email,
          password: values.password,
        }),

        {
          "Content-Type": "application/json",
        }
      );
      props.logInStatusHandler(logInResponseData.user.id);
      console.log("successfully logged in");
      history.push("/");
    } catch (err) {}
  };

  return (
    <div className="form-wrapper">
      <ErrorModal error={error} onClear={clearError} />
      <div className="auth-form ">
        <h2 className="mb-4 text-center">Log in to your account</h2>
        {/* /////////////////////////////////////////////////////////// */}
        {/* I wrapped the google signin div in another div with the height of 44px to reduce flickering. I learnt it in stack overflow.  */}
        <div id="googleSigninContainer">
          <div id="googleSignin"></div>
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        <div className="text-center my-4 "> or </div>

        {isLoading && <LoadingSpinner asOverlay />}
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form>
                <Input type="email" label="Email" name="email" />
                <Input type="password" label="Password" name="password" />
                <button
                  type="submit"
                  className="rounded-pill w-100 bg-warning py-2 fw-bold"
                  disabled={!formik.isValid}
                >
                  Log in
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default LoginForm;
