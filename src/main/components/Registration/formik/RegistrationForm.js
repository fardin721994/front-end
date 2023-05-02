import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";
// import Navigation from "../../heading/navigation/Navigation";

import Card from "../../../../shared/components/UIElements/Card";
import Button from "../../../../shared/components/FormElements/Button";
import ErrorModal from "../../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../../../shared/hooks/http-hook";
// import ImageUpload from "../../../../shared/components/FormElements/ImageUpload";
import "./auth.css";
import jwt_decode from "jwt-decode";

function RegistrationForm(props) {
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
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email format").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match")
      .required("Required"),
  });

  const history = useHistory();

  const onRegitrationSubmitHandler = async (values) => {
    try {
      const signUpResponseData = await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/users/signup",
        "POST",
        JSON.stringify({
          name: values.username,
          email: values.email,
          password: values.password,
        }),
        {
          "Content-Type": "application/json",
        }
      );
      console.log("successfully signed up");
    } catch (err) {}

    // logging in after signing up : start
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
      props.logInStatusHandler(
        logInResponseData.userId,
        logInResponseData.token
      );
      // console.log("successfully logged in");
      history.push("/");
    } catch (err) {}

    // logging in after signing up : finish
  };

  return (
    <div className="form-wrapper">
      <ErrorModal error={error} onClear={clearError} />
      <div className="auth-form ">
        <h2 className="mb-4 text-center">Create a free acount</h2>
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
          onSubmit={onRegitrationSubmitHandler}
        >
          {(formik) => {
            return (
              <Form>
                <Input type="username" label="UserName" name="username" />
                <Input type="email" label="Email" name="email" />
                <Input type="password" label="Password" name="password" />
                <Input
                  type="password"
                  label="Confirm Password"
                  name="confirmPassword"
                />
                {/* <ImageUpload center id="image" /> */}

                <button
                  type="submit"
                  disabled={!formik.isValid}
                  className="rounded-pill w-100 bg-warning py-2 fw-bold"
                >
                  Sign up
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default RegistrationForm;
