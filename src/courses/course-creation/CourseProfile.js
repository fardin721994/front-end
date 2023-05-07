import React, { useState } from "react";
import "./CourseProfile.css";
import axios from "axios";

function CourseProfile(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState();
  const [description, setDescription] = useState("");
  const [profileSaved, setprofileSaved] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("courseName", name);
    formData.append("image", image);
    formData.append("description", description);
    try {
      const res = await axios.post(
        process.env.REACT_APP_BACKEND_URL + "/courses/new/profile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      props.setCourseData({
        sections: { ...props.courseData.sections },
        profile: { name: `${name}`, description: `${description}` },
      });
      setprofileSaved(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="course-profile-wrapper">
      <form className="course-profile">
        <label htmlFor="course-profile-name">Course name </label>
        <input
          type="text"
          id="course-profile-name"
          name="course-profile-name"
          className="mb-4"
          value={name}
          onChange={handleNameChange}
        ></input>
        <label htmlFor="course-profile-image">Course profile image </label>
        <input
          type="file"
          id="course-profile-image"
          name="course-profile-image"
          className="mb-4"
          onChange={handleImageChange}
        ></input>
        <label htmlFor="course-profile-description">Course description </label>
        <textarea
          className="d-block mb-4"
          id="course-profile-description"
          name="course-profile-description"
          value={description}
          onChange={handleDescriptionChange}
        ></textarea>
        <button type="submit" className="bg-warning" onClick={handleFormSubmit}>
          Save
        </button>
        <div
          className={
            "bg-success text-center " + `${profileSaved ? "" : "d-none"}`
          }
        >
          Successfully saved
        </div>
      </form>
    </div>
  );
}
export default CourseProfile;
