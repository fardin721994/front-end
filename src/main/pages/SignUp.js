import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <section className=" bg-dark text-white   pb-5 text-center ">
      <div className="pt-5">
        <h3 className="section__header pt-5">
          Join the funguage club and start learning right away.
        </h3>
      </div>
      <Link
        to="/registration"
        className="bg-success text-dark fs-1 fw-semibold text-decoration-none rounded-pill py-2 px-4  mt-3 mb-5  d-inline-block"
      >
        Open your free account
      </Link>
    </section>
  );
}

export default SignUp;
