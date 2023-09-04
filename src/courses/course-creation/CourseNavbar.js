import React, { useState, useEffect } from "react";
import "./CourseNavbar.css";
function CourseNavbar({
  selectedTab,
  setSelectedTab,
  sectionsNumber,
  addSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuButton = () => setMenuOpen((menuOpen) => !menuOpen);
  const handleTabSelect = (event) => setSelectedTab(event.target.id);

  return (
    <div className="course-navbar ">
      <div className="header">
        <button className="menu-button" onClick={toggleMenuButton}></button>
        <h3> {selectedTab}</h3>
      </div>
      <div className={`tabs ${menuOpen ? "" : "hidden"} `}>
        <button
          onClick={handleTabSelect}
          id="profile"
          className={`bg-primary  border-primary  ${
            selectedTab === "profile" ? "course-navbar-button-bolder" : ""
          }`}
        >
          profile
        </button>

        {Array.from({ length: sectionsNumber }, (v, i) => i + 1).map(
          (sectionNum) => (
            <button
              onClick={handleTabSelect}
              id={`section_${sectionNum}`}
              className={`bg-danger border-danger ${
                selectedTab === `section_${sectionNum}`
                  ? "course-navbar-button-bolder"
                  : ""
              }`}
              key={sectionNum}
            >
              {`section ${sectionNum}`}
            </button>
          )
        )}
        <button
          onClick={addSection}
          id="add_section"
          className="bg-warning  border-warning"
        >
          add section
        </button>
        <button
          onClick={handleTabSelect}
          id="publish"
          className={`bg-success  border-success ${
            selectedTab === "publish" ? "course-navbar-button-bolder" : ""
          }`}
        >
          publish
        </button>
      </div>
    </div>
  );
}
export default CourseNavbar;
