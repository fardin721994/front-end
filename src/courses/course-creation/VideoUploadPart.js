import React from "react";
import Form from "react-bootstrap/Form";
import FileUpload from "./FileUpload";

function VideoUploadPart(props) {
  return (
    <div className="mb-3 w-75  mx-auto bg-warning rounded-4 py-2">
      <FileUpload
        fileType="video"
        courseName={props.courseName}
        courseSection={props.courseSection}
      />
    </div>
  );
}
export default VideoUploadPart;
