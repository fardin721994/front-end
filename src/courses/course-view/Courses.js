import React, { useState, useEffect } from "react";
import "./Courses.css";
import LoadingSpinner from "./LoadingSpinner";
import CourseItem from "./CourseItem";

const Courses = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (function () {
      const coursesRetreive = async () => {
        try {
          const retrievedCourses = await fetch(
            process.env.REACT_APP_BACKEND_URL + "/courses/all"
          );
          const response = await retrievedCourses.json();
          setCourses(response);
          setIsLoading(false);
        } catch (err) {
          console.log("sth wrong happened", err);
        }
      };
      coursesRetreive();
    })();
  }, []);

  if (!isLoading && courses.length === 0) {
    return (
      <div className="place-list center">
        <h2>No courses found. Maybe create one?</h2>
        <button to="/courses/new">Share Course</button>
      </div>
    );
  }

  return (
    <div className="courses">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="courses-list">
          {courses.map((course) => (
            <CourseItem
              id={course.id}
              key={course.id}
              name={course.profile.name}
              description={course.profile.description}
              imgSrc={
                process.env.REACT_APP_BACKEND_URL +
                `/static-files/profile-images/courses/${course.profile.name}.jpg`
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
