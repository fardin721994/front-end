import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";
import "./SectionView.css";
import LoadingSpinner from "./LoadingSpinner";
function SectionView() {
  ////////////////
  //THESE DATA SHOULD BE RECIEVED FROM PARENT
  // const courseName = "A"

  const { courseId, sectionNumber } = useParams();
  console.log("course id", courseId, "sectionnumber", sectionNumber);

  ///////////////////
  const [courseData, setCourseData] = useState("placeholder");
  const [courseImages, setCourseImages] = useState();
  const [subtitleURL, setSubtitleURL] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // let images = [];

  ///////////////////////////////
  React.useEffect(() => {
    (function () {
      // FETCHING COURSE DATA AND SECTION SUBTITLE
      const courseDataRetreive = async () => {
        try {
          const retrievedcourseData = await fetch(
            process.env.REACT_APP_BACKEND_URL + `/courses/${courseId}`
          );
          const data = await retrievedcourseData.json();
          // console.log("course data", data);
          setCourseData(data);
          const courseName = data.profile.name;
          const subtitleName = `${courseName}${sectionNumber}.vtt`;

          //FETCHING SUBITILE
          const retrievedSubtitle = await fetch(
            process.env.REACT_APP_BACKEND_URL +
              `/static-files/courses-data/${courseName}/section_${sectionNumber}/${subtitleName}`
          );
          let blob = await retrievedSubtitle.blob();
          let url = await window.URL.createObjectURL(blob);

          setSubtitleURL(url);
          setIsLoading(false);
        } catch (err) {
          console.log("sth wrong happened with loading section data", err);
        }
      };
      courseDataRetreive();
    })();
  }, []);

  ////////////////////////////////////////////////////////////////////////////
  // React.useEffect(() => {
  //   (function () {
  //     const courseDataRetreive = async () => {
  //       try {
  //         const retrievedCourseData = await sendRequest(
  //           process.env.REACT_APP_BACKEND_URL + `/courses/data/${courseId}`
  //         );
  //         // for (const wordPair of retrievedCourseData) {
  //         //   let image = await sendRequest(
  //         //     process.env.REACT_APP_BACKEND_URL +
  //         //       `/images/${wordPair.databaseWord}`
  //         //   );
  //         //   console.log(image);
  //         // }

  //         setCourseData(retrievedCourseData);
  //       } catch (err) {
  //         console.log("sth wrong happened");
  //       }
  //     };
  //     courseDataRetreive();
  //   })();
  // }, []);
  // React.useEffect(() => {
  //   (function () {})();
  // }, [data]);
  // console.log("im sub", subtitle);

  ///////////////////////////////////////
  // if (courseData && subtitleURL) {
  //   // courseData.course.content.forEach((element) => {
  //   //   data[`${element.subtitleWord}`] = element.databaseWord;
  //   // });
  // }
  //////////////////////////

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <VideoPlayer
          data={courseData.sections[sectionNumber - 1].words}
          subtitleURL={subtitleURL}
          videoSrc={
            process.env.REACT_APP_BACKEND_URL +
            `/static-files/courses-data/${courseData.profile.name}/section_${sectionNumber}/${courseData.profile.name}${sectionNumber}.mp4`
          }
        />
      )}
    </>
  );
}
export default SectionView;
