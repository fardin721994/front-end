import React from "react";
import { Link } from "react-router-dom";
import "./SectionItem.css";
function SectionItem({ name, imgSrc, description, sectionNumber, courseId }) {
  return (
    <Link
      className="section-item"
      as={Link}
      to={`/sections/view/${courseId}/${sectionNumber}`}
    >
      <img src={imgSrc} />
      <h3>{name}</h3>
      <p>{description}</p>
    </Link>
  );
}

export default SectionItem;
