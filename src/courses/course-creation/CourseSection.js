import React, { useState } from "react";

import WordsPart from "./WordsPart";
import SubtitleUploadPart from "./SubtitleUploadPart";
import VideoUploadPart from "./VideoUploadPart";
import "./CourseSection.css";

function CourseSection({
  courseName,
  courseSection,
  ////////////////
  databaseWords,
  sectionData,
  setSectionData,
}) {
  const [uploadedSubtitleSrc, setUploadedSubtitleSrc] = useState();
  const [subtitleWords, setSubtitleWords] = useState([]);
  const [cues, setCues] = useState([]);

  React.useEffect(() => {
    (function () {
      if (uploadedSubtitleSrc) {
        const video = document.getElementById("vp-video");
        const track = document.getElementById("vp-track");
        const wordFilter = [
          "",
          ".",
          "?",
          "!",
          "a",
          "I",
          "an",
          "on",
          "that",
          "to",
          "is",
          "-",
        ];
        track.addEventListener(`load`, () => {
          // video.textTracks[0].cues.forEach((element) => console.log(element));
          // console.log(video.textTracks[0].cues);
          // const cues = Array.from(video.textTracks[0].cues, (cue) => {
          //   return { id: cue.id, text: cue.text };
          // });
          console.log("hello i'm starting");
          let wordId = 0;
          let allWords = [];
          let allCues = [];
          for (let i = 0; i < video.textTracks[0].cues.length; i++) {
            let cue = video.textTracks[0].cues[i];
            // console.log(allCues);
            let text = cue.text;
            text = text
              .replaceAll(".", " .")
              .replaceAll("?", " ?")
              .replaceAll("\n", " ");

            allCues.push({ id: cue.id, text: text });
            let cueWords = text.split(" ");
            cueWords = cueWords.map((word) => word.trim());
            cueWords = cueWords.filter((word) => !wordFilter.includes(word));

            cueWords = cueWords.map((word) => {
              wordId++;
              return {
                title: word,
                cueId: cue.id,
                id: wordId,
              };
            });

            allWords = [...allWords, ...cueWords];
          }
          setSubtitleWords(allWords);
          setCues(allCues);
        });
      }
    })();
  }, [uploadedSubtitleSrc]);

  return (
    <React.Fragment>
      <div className="container-fluid">
        <SubtitleUploadPart
          className=" w-50 mx-auto"
          setUploadedSubtitleSrc={setUploadedSubtitleSrc}
          courseName={courseName}
          courseSection={courseSection}
          ////////////////
          subtitleUploaded={sectionData.subtitleUploaded}
          setSubtitleUploaded={(boolean) =>
            setSectionData({ ...sectionData, subtitleUploaded: boolean })
          }
        />
        <VideoUploadPart
          className="w-50 mx-auto"
          courseName={courseName}
          courseSection={courseSection}
          ////////////
          videoUploaded={sectionData.videoUploaded}
          setSubtitleUploaded={(boolean) =>
            setSectionData({ ...sectionData, videoUploaded: boolean })
          }
        />
        <video id="vp-video" controls preload="metadata" className="d-none">
          {/* <source src={videosource} /> */}
          {uploadedSubtitleSrc ? (
            <track
              label="English"
              kind="subtitles"
              srcLang="en"
              // src="media/friends.s01e01_720p_bluray_x264-sujaidr.vtt"
              src={uploadedSubtitleSrc}
              default
              id="vp-track"
            />
          ) : null}
        </video>
        <WordsPart
          subtitleWords={subtitleWords}
          databaseWords={databaseWords}
          cues={cues}
          /////////////
          wordList={sectionData.words}
          setWordList={(newWords) =>
            setSectionData({ ...sectionData, words: newWords })
          }
        />
      </div>
    </React.Fragment>
  );
}
export default CourseSection;
