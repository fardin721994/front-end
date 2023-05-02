import React, { useState } from "react";
import CourseNavbar from "./CourseNavbar";
import CourseSection from "./CourseSection";
import CourseProfile from "./CourseProfile";
import CoursePublish from "./CoursePublish";

function NewCourse(props) {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [courseData, setCourseData] = useState({
    profile: { name: "", image: "", description: "" },
    sections: {},
  });
  console.log("selected tab in newcourse", selectedTab);
  let tabCorrespondingElement;
  if (selectedTab === "profile")
    tabCorrespondingElement = (
      <CourseProfile courseData={courseData} setCourseData={setCourseData} />
    );
  else if (selectedTab === "publish")
    tabCorrespondingElement = <CoursePublish />;
  else
    tabCorrespondingElement = (
      <CourseSection courseData={courseData} setCourseData={setCourseData} />
    );

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 bg-dark p-0 ">
          <CourseNavbar
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
            courseData={courseData}
            setCourseData={setCourseData}
            // sectionsNumber={sectionsNumber}
            // setSectionsNumber={setSectionsNumber}
          />
        </div>
        <div className="col-10 p-0 mt-3">{tabCorrespondingElement}</div>
      </div>
    </div>
  );
}

export default NewCourse;
