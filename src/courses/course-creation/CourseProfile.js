import React from "react";
import "./CourseProfile.css";
function CourseProfile() {
  return (
    <div className="course-profile-wrapper">
      <div className="course-profile">
        <label htmlFor="course-profile-name">Course name </label>
        <input
          type="text"
          id="course-profile-name"
          name="course-profile-name"
          className="mb-4"
        ></input>
        <label htmlFor="course-profile-image">Course profile image </label>
        <input
          type="file"
          id="course-profile-image"
          name="course-profile-image"
          className="mb-4"
        ></input>
        <label htmlFor="course-profile-description">Course description </label>
        <textarea
          className="d-block mb-4"
          id="course-profile-description"
          name="course-profile-description"
        ></textarea>
        <button className="bg-warning">Save </button>
      </div>
    </div>
  );
}
export default CourseProfile;
