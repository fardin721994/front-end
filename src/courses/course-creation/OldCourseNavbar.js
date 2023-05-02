import React, { useState, useEffect } from "react";
import "./CourseNavbar.css";
function CourseNavbar(props) {
  const [sectionsTabs, setSectionsTabs] = useState([]);
  const [currentTab, setCurrentTab] = useState("profile");

  const tabClickHandler = (event) => props.setSelectedTab(event.target.id);

  useEffect(() => {
    const newTabId = `section_${props.sectionsNumber + 1}`;
    // setCurrentTab(newTabId);
    props.setSelectedTab(newTabId);
    ///////////////////////////////////////////////////
    let previousSections = props.courseData.sections;
    previousSections[`section${props.sectionsNumber + 1}`] = {
      videoUrl: "",
      subtitleUrl: "",
      description: "",
      words: [],
    };
    let newSections = previousSections;
    props.setCourseData({
      profile: props.courseData.profile,
      sections: newSections,
    });

    /////////////////////////////////////////////////////////

    ////////////////////
    const newSectionsTabs = Array.from(
      { length: props.sectionsNumber + 1 },
      (v, i) => i + 1
    ).map((sectionNum) => (
      <button
        onClick={tabClickHandler}
        id={`section_${sectionNum}`}
        className={`bg-danger border-danger ${
          sectionNum !== props.sectionsNumber + 1
            ? ""
            : "course-navbar-button-bolder"
        }`}
        key={sectionNum}
      >
        {`section ${sectionNum}`}
      </button>
    ));
    setSectionsTabs(newSectionsTabs);
    console.log("hello1");
  }, [props.sectionsNumber]);

  ///////////////////////////////
  useEffect(() => {
    const previousSelectedTab = document.querySelector(
      ".course-navbar-button-bolder"
    );
    previousSelectedTab.classList.remove("course-navbar-button-bolder");
    const selectedTab = document.getElementById(props.selectedTab);
    selectedTab.classList.add("course-navbar-button-bolder");
    console.log("hello2");
  }, [props.selectedTab]);
  //////////////////////////////////////

  const addSectionHandler = () =>
    props.setSectionsNumber(props.sectionsNumber + 1);
  return (
    <div className="course-navbar-wrapper ">
      <button
        onClick={tabClickHandler}
        id="profile"
        className="bg-primary  border-primary mb-3 course-navbar-button-bolder"
      >
        profile
      </button>

      {sectionsTabs}
      <button
        onClick={addSectionHandler}
        id="add_section"
        className="bg-warning  border-warning mb-3"
      >
        add section
      </button>
      <button
        onClick={tabClickHandler}
        id="publish"
        className="bg-success  border-success"
      >
        publish
      </button>
    </div>
  );
}
export default CourseNavbar;
