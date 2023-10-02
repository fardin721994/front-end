import React from "react";
import Form from "react-bootstrap/Form";
import FileUpload from "./FileUpload";
function SubtitleUploadPart(props) {
  return (
    <div className="mb-3 w-75  mx-auto bg-warning rounded-4 py-2">
      <FileUpload
        fileType="subtitle"
        uploadedFile={props.subtitleFile}
        setUploadedFile={props.setSubtitleFile}
        setUploadedFileSrc={props.setSubtitleSrc}
        courseName={props.courseName}
        courseSection={props.courseSection}
      />
    </div>
  );
}
export default SubtitleUploadPart;
