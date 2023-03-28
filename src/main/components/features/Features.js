import React from "react";
import pic1 from "./img/fun-lazy.jpg";
import pic2 from "./img/easy to use-lazy.jpg";
import pic3 from "./img/effective-lazy.jpg";
import "./Features.css";

function Features() {
  return (
    <section className="bg-dark-subtle text-dark py-5 " id="section--1">
      <div className="container text-center mb-5  ">
        <h2 className="fs-4 text-success">Features</h2>
        <h3 className="fs-2">
          Great features you can use to learn English in a modern way.
        </h3>
      </div>

      <div className="container ">
        <div className="row align-items-center justify-content-between mb-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-3 d-none d-lg-block">
            <img
              src={pic1}
              data-src="img/digital.jpg"
              alt="Computer"
              // className="features__img lazy-img"
              className="w-100"
            />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <h5> Funguage is fun!</h5>
            <p className="w-100 fs-5">
              Here you can learn English while having fun because the content is
              fun! Choose any video you enjoy. No more boring text books!
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/* /////////////// */}
        <div className="row align-items-center justify-content-between mb-5">
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <h5>It's easy to use.</h5>
            <p className="w-100 fs-5">
              When you see a word you want to learn , Just press "Enter" on PC
              or make a tab on phone , we'll take care of the rest!
            </p>
          </div>
          <div className="col-lg-1"></div>

          <div className="col-lg-3 d-none d-lg-block ">
            <img
              src={pic2}
              data-src="img/grow.jpg"
              alt="Computer"
              // className="features__img lazy-img"
              className="w-100"
            />
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/* ////////////////// */}
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-1"></div>

          <div className="col-lg-3 d-none d-lg-block">
            <img
              src={pic3}
              data-src="img/digital.jpg"
              alt="Computer"
              // className="features__img lazy-img"
              className="w-100"
            />
          </div>
          <div className="col-lg-1"></div>

          <div className="col-lg-3">
            <h5>It's effective.</h5>
            <p className="w-100 fs-5">
              Here you will learn English with "real English material" and
              immerse your self in the language. It's based on the most
              effective methods of language learning.
            </p>
          </div>
          <div className="col-lg-1"></div>
        </div>
        {/* /////////////// */}
      </div>
    </section>
  );
}

export default Features;
