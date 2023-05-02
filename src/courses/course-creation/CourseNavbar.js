import React, { useState, useEffect } from "react";
import "./CourseNavbar.css";
function CourseNavbar(props) {
  const [sectionsNumber, setSectionsNumber] = useState(1);

  const tabSelectHandler = (event) => props.setSelectedTab(event.target.id);
  let addSectionHandler;
  const [sectionsTabs, setSectionsTabs] = useState([
    <button
      onClick={tabSelectHandler}
      id={`section_1`}
      className="bg-danger border-danger "
      key={1}
    >
      section 1
    </button>,
  ]);

  ///////////////////////////////////////////////////
  //A useEffect depending on  sectionsNumber. This state variable changes when "add section" button is clicked.

  useEffect(() => {
    let previousSections = props.courseData.sections;
    previousSections[`section${sectionsNumber}`] = {
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

    const newSectionsTabs = Array.from(
      { length: sectionsNumber },
      (v, i) => i + 1
    ).map((sectionNum) => (
      <button
        onClick={tabSelectHandler}
        id={`section_${sectionNum}`}
        className={`bg-danger border-danger ${
          sectionNum !== sectionsNumber || sectionsNumber === 1
            ? ""
            : "course-navbar-button-bolder"
        }`}
        key={sectionNum}
      >
        {`section ${sectionNum}`}
      </button>
    ));
    setSectionsTabs(newSectionsTabs);
    const newTabId = `section_${sectionsNumber}`;
    props.setSelectedTab(sectionsNumber === 1 ? "profile" : newTabId);
  }, [sectionsNumber]);

  ///////////////////////////////
  //A useEffect depending on  props.selectedTab. This state variable changes when a new tab is selected.

  useEffect(() => {
    const previousSelectedTabs = document.querySelectorAll(
      ".course-navbar-button-bolder"
    );
    previousSelectedTabs.forEach((tab) =>
      tab.classList.remove("course-navbar-button-bolder")
    );

    const selectedTab = document.getElementById(props.selectedTab);
    selectedTab.classList.add("course-navbar-button-bolder");
  }, [props.selectedTab]);
  //////////////////////////////////////

  return (
    <div className="course-navbar-wrapper ">
      <button
        onClick={tabSelectHandler}
        id="profile"
        className="bg-primary  border-primary mb-3 course-navbar-button-bolder"
      >
        profile
      </button>

      {sectionsTabs}
      <button
        onClick={() => setSectionsNumber(sectionsNumber + 1)}
        id="add_section"
        className="bg-warning  border-warning mb-3"
      >
        add section
      </button>
      <button
        onClick={tabSelectHandler}
        id="publish"
        className="bg-success  border-success"
      >
        publish
      </button>
    </div>
  );
}
export default CourseNavbar;
