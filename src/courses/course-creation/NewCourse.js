import React, { useState } from "react";
import CourseNavbar from "./CourseNavbar";
import CourseSection from "./CourseSection";
import CourseProfile from "./CourseProfile";
import CoursePublish from "./CoursePublish";
import "./NewCourse.css";

import { useHttpClient } from "../../shared/hooks/http-hook";

function NewCourse(props) {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [courseData, setCourseData] = useState({
    profile: { name: "", description: "" },
    sections: [
      {
        subtitleUploaded: false,
        videoUploaded: false,
        words: [{ subtitleWord: [], databaseWord: [] }],
      },
    ],
  });
  const [databaseWords, setDatabaseWords] = useState([]);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  // FOR SAVING SUBTITLE FILES AND THEIR SCRS BETWEEN RE-RENDERS
  const [subtitles, setSubtitles] = useState([
    { subtitleFile: null, subtitleSrc: null },
  ]);
  ////////////////////

  const currentSectionIndex = selectedTab.includes("section")
    ? Number(selectedTab.slice(8)) - 1
    : null;

  ///////////
  // FUNCTIONS TO SET DIFFERENT PARTS OF COURSE DATA
  const setCourseName = (courseName) =>
    setCourseData({
      ...courseData,
      profile: { ...courseData.profile, name: courseName },
    });

  const setCourseDescription = (courseDescription) =>
    setCourseData({
      ...courseData,
      profile: { ...courseData.profile, description: courseDescription },
    });
  const setSectionData = (sectionData) => {
    setCourseData({
      ...courseData,
      sections: [
        ...courseData.sections.slice(0, currentSectionIndex),
        sectionData,
        ...courseData.sections.slice(currentSectionIndex + 1),
      ],
    });
  };
  const addSection = () => {
    setCourseData({
      ...courseData,
      sections: [
        ...courseData.sections,
        {
          subtitleUploaded: false,
          videoUploaded: false,
          words: [{ subtitleWord: [], databaseWord: [] }],
        },
      ],
    });
    setSelectedTab(`section_${courseData.sections.length + 1}`);
  };
  //////////////
  // FOR SAVING SUBTITLE FILES AND THEIR SCRS BETWEEN RE-RENDERS

  const setSectionSubtitleFile = (newSubtitleFile) => {
    setSubtitles((subtitles) => [
      ...subtitles.slice(0, currentSectionIndex),
      { ...subtitles[currentSectionIndex], subtitleFile: newSubtitleFile },
      ...subtitles.slice(currentSectionIndex + 1),
    ]);
  };
  const setSectionSubtitleSrc = (newSubtitleSrc) => {
    setSubtitles((subtitles) => [
      ...subtitles.slice(0, currentSectionIndex),
      { ...subtitles[currentSectionIndex], subtitleSrc: newSubtitleSrc },
      ...subtitles.slice(currentSectionIndex + 1),
    ]);
  };
  ///////////////////////
  //// GETTING ALL THE WORDS FROM DATABASE
  React.useEffect(() => {
    (function () {
      const dataRetreive = async () => {
        try {
          const retrievedDatabaseWords = await sendRequest(
            process.env.REACT_APP_BACKEND_URL + "/words"
          );
          // console.log("this is all the words", retrievedDatabaseWords);

          //// to add id key. we have _id key but I need id key.
          retrievedDatabaseWords.forEach((data) => {
            data.id = data._id;
          });
          ////
          setDatabaseWords(retrievedDatabaseWords);
        } catch (err) {
          console.log("sth wrong happened when loading words from database");
        }
      };
      dataRetreive();
    })();
  }, []);
  //////////////////////////
  /////////////////////
  let tabCorrespondingElement;
  if (selectedTab === "profile")
    tabCorrespondingElement = (
      <CourseProfile
        courseName={courseData.profile.name}
        setCourseName={setCourseName}
        courseDescription={courseData.profile.description}
        setCourseDescription={setCourseDescription}
      />
    );
  else if (selectedTab === "publish")
    tabCorrespondingElement = <CoursePublish courseData={courseData} />;
  else {
    tabCorrespondingElement = (
      <CourseSection
        courseName={courseData.profile.name}
        courseSection={selectedTab}
        ////////////
        key={selectedTab}
        databaseWords={databaseWords}
        sectionData={courseData.sections[currentSectionIndex]}
        setSectionData={setSectionData}
        //////////////
        subtitleFile={subtitles[currentSectionIndex]?.subtitleFile}
        setSubtitleFile={setSectionSubtitleFile}
        subtitleSrc={subtitles[currentSectionIndex]?.subtitleSrc}
        setSubtitleSrc={setSectionSubtitleSrc}
      />
    );
  }
  console.log("this is course data", courseData);

  ////////////////////////
  return (
    <div className="new-course">
      <CourseNavbar
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
        sectionsNumber={courseData.sections.length}
        addSection={addSection}
      />
      {tabCorrespondingElement}
    </div>
  );
}

export default NewCourse;
