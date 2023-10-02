import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./CourseView.css";
import LoadingSpinner from "./LoadingSpinner";
import SectionItem from "./SectionItem";

const CourseView = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState({});

  //////////////
  const courseId = useParams().courseId;

  /////////////
  useEffect(() => {
    (function () {
      const sectionsRetreive = async () => {
        try {
          const retrievedCourse = await fetch(
            process.env.REACT_APP_BACKEND_URL + `/courses/${courseId}`
          );
          const course = await retrievedCourse.json();
          setCourse(course);
          setIsLoading(false);
        } catch (err) {
          console.log("sth wrong happened", err);
        }
      };
      sectionsRetreive();
    })();
  }, []);

  if (!isLoading && course.sections.length === 0) {
    return (
      <div className="place-list center">
        <h2>No sections found. Maybe create one?</h2>
        <button to="/sections/new">Share Course</button>
      </div>
    );
  }

  return (
    <div className="course-view">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="sections-list">
          {Array.from({ length: course.sections.length }, (v, i) => i + 1).map(
            (item) => (
              <SectionItem
                sectionNumber={item}
                key={`${courseId}${item}`}
                name={course.profile.name}
                description={`section${item}`}
                imgSrc={
                  process.env.REACT_APP_BACKEND_URL +
                  `/static-files/profile-images/courses/${course.profile.name}.jpg`
                }
                courseId={courseId}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default CourseView;
