import React from "react";
import { Link } from "react-router-dom";
import "./CourseItem.css";
function CourseItem({ id, name, imgSrc, description }) {
  return (
    <Link className="course-item" to={`/courses/view/${id}`}>
      <img src={imgSrc} />
      <h3>{name}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default CourseItem;
