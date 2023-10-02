import React from "react";
import "./CoursePublish.css";
import axios from "axios";

function CoursePublish({ courseData }) {
  const handleCourseSave = async () => {
    // console.log("course data", courseData);
    try {
      await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/courses",
        courseData
      );
    } catch (err) {
      console.log("Saving the course failed");
    }
  };
  return <button onClick={handleCourseSave}> save course</button>;
}
export default CoursePublish;
