import React, { useState, useRef } from "react";
import "./VideoPlayer.css";
import Carousel from "react-bootstrap/Carousel";
import Hls from "hls.js";
import { fabClasses } from "@mui/material";

const VideoPlayer = ({ data, videoSrc, subtitleURL }) => {
  console.log("mmmmmmmmowwwwwwwwwww", data);
  ////////////////////////////////////////////////////////////////////////
  // STATES:
  const [rows, setRows] = useState([]);
  const [imageSrc, setImageSrc] = useState("");
  const [showModal, setShowModal] = useState("false");
  // const [pronunciationSrc, setpronunciationSrc] = useState(false);
  const [pronunciationSrc, setPronunciationSrc] = useState(null);
  ///////////////////////
  const [currentDataSet, setCurrentDataSet] = useState(data);
  const [currentDataIndex, setCurrentDataIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  ///////////////////////////////////////////////////////////////////////
  // REFERENCES:
  const videoContainerRef = useRef();
  const videoRef = useRef();
  const imageRef = useRef();
  const trackRef = useRef();
  const videoControlsRef = useRef();
  // VIDEO CONTROL REFERENCES:
  const playpauseRef = useRef();
  const stopRef = useRef();
  const muteRef = useRef();
  const volumeRef = useRef();
  const progressRef = useRef();
  const fullscreenRef = useRef();
  ///////////////////
  let activeWordsBackwardArrow = true;
  if (currentWordIndex === 0) activeWordsBackwardArrow = false;
  ////
  let activeWordsForwardArrow = true;
  if (
    currentWordIndex ===
    currentDataSet[currentDataIndex]?.databaseWord.length - 1
  )
    activeWordsForwardArrow = false;
  ////
  let activeExamplesBackwardArrow = true;
  if (currentExampleIndex === 0) activeExamplesBackwardArrow = false;
  ////
  let activeExamplesForwardArrow = true;
  if (
    currentExampleIndex ===
    currentDataSet[currentDataIndex]?.databaseWord[currentWordIndex]?.meaning
      .examples.length -
      1
  )
    activeExamplesForwardArrow = false;
  ////
  let activeImagesBackwardArrow = true;
  if (currentImageIndex === 0) activeImagesBackwardArrow = false;
  ////
  let activeImagesForwardArrow = true;
  if (
    currentImageIndex ===
    currentDataSet[currentDataIndex]?.databaseWord[currentWordIndex]?.images
      .length -
      1
  )
    activeImagesForwardArrow = false;
  ////////////////
  let showImagesPart = false;
  if (
    showModal === "true" &&
    currentDataSet[currentDataIndex]?.databaseWord[currentWordIndex]?.images
      .length > 0
  ) {
    showImagesPart = true;
  }
  ///////////////////
  let showExamplesPart = false;
  if (
    showModal === "true" &&
    currentDataSet[currentDataIndex]?.databaseWord[currentWordIndex]?.meaning
      .examples.length > 0
  ) {
    showExamplesPart = true;
  }
  ////////////////////////////////////////////////////
  const wordClickHandler = (imgSrc, INDEX) => {
    videoRef.current.pause();
    setShowModal("true");
    // setImageSrc(imgSrc);
    ////////////
    setCurrentDataIndex(INDEX);
  };

  //////////////////////////////////////////

  //////////////
  // FULL SCREEN
  // Check if the browser supports the Fullscreen API
  const fullScreenEnabled = !!(
    document.fullscreenEnabled ||
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled ||
    document.webkitSupportsFullscreen ||
    document.webkitFullscreenEnabled ||
    document.createElement("video").webkitRequestFullScreen
  );
  // If the browser doesn't support the Fulscreen API then hide the fullscreen button
  if (!fullScreenEnabled) {
    fullscreenRef.current.style.display = "none";
  }

  // Set the video container's fullscreen state
  const setFullscreenData = function (state) {
    videoContainerRef.current.setAttribute("data-fullscreen", !!state);
    // Set the fullscreen button's 'data-state' which allows the correct button image to be set via CSS
    fullscreenRef.current.setAttribute(
      "data-state",
      !!state ? "cancel-fullscreen" : "go-fullscreen"
    );
  };

  // Checks if the document is currently in fullscreen mode
  const isFullScreen = function () {
    return !!(
      document.fullScreen ||
      document.webkitIsFullScreen ||
      document.mozFullScreen ||
      document.msFullscreenElement ||
      document.fullscreenElement
    );
  };

  //// Handling full screen
  const handleFullscreen = function () {
    // If fullscreen mode is active...
    if (isFullScreen()) {
      // ...exit fullscreen mode
      // (Note: this can only be called on document)
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen)
        document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(false);
    } else {
      // ...otherwise enter fullscreen mode
      // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)

      if (videoContainerRef.current.requestFullscreen) {
        videoContainerRef.current.requestFullscreen();
      } else if (videoContainerRef.current.mozRequestFullScreen) {
        videoContainerRef.current.mozRequestFullScreen();
      } else if (videoContainerRef.current.webkitRequestFullScreen) {
        // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
        // ensures that our custom controls are visible:
        // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
        // figure[data-fullscreen=true] .controls { z-index:2147483647; }
        videoRef.current.webkitRequestFullScreen();
      } else if (videoContainerRef.current.msRequestFullscreen)
        videoContainerRef.current.msRequestFullscreen();
      setFullscreenData(true);
    }
  };

  //////////////////////////////////////////////////
  //////////////////////////////////////////////////
  // Changes the button state of certain button's so the correct visuals can be displayed with CSS
  const changeButtonState = function (type) {
    // Play/Pause button
    if (type == "playpause") {
      if (videoRef.current.paused || videoRef.current.ended) {
        playpauseRef.current.setAttribute("data-state", "play");
      } else {
        playpauseRef.current.setAttribute("data-state", "pause");
      }
    }
    // Mute button
    else if (type == "mute") {
      muteRef.current.setAttribute(
        "data-state",
        videoRef.current.muted ? "unmute" : "mute"
      );
    }
  };
  ////////////////////////////////////////////////
  ////////////// PLAY-PAUSE BUTTON

  // Add events for all buttons

  const handlePlayPause = (e) => {
    if (videoRef.current.paused || videoRef.current.ended)
      videoRef.current.play();
    else videoRef.current.pause();
  };

  // The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
  const handleStop = (e) => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
    changeButtonState("playpause");
  };

  const handleMute = (e) => {
    videoRef.current.muted = !videoRef.current.muted;
    changeButtonState("mute");
  };

  ///////// Handling video progress

  // As the video is playing, update the progress bar
  const handleProgressUpdate = () => {
    // For mobile browsers, ensure that the progress element's max attribute is set
    if (!progressRef.current.getAttribute("max"))
      progressRef.current.setAttribute("max", videoRef.current.duration);
    progressRef.current.value = videoRef.current.currentTime;
  };

  // React to the user clicking within the progress bar
  const handleProgressClick = (e) => {
    // Also need to take the parents into account here as .controls and figure now have position:relative
    const pos =
      (e.pageX -
        (progressRef.current.offsetLeft +
          progressRef.current.offsetParent.offsetLeft +
          progressRef.current.offsetParent.offsetParent.offsetLeft)) /
      progressRef.current.offsetWidth;
    videoRef.current.currentTime = pos * videoRef.current.duration;
  };

  ////////////////////////////////////////////
  // Handling volume change

  const handleVolumeChange = (event) => {
    videoRef.current.volume = event.target.value / 100;
  };

  //////////////////////////////////////////
  // Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video

  const handleProgressMaxValue = () => {
    progressRef.current.setAttribute("max", videoRef.current.duration);
  };

  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////

  const handleCloseModal = () => {
    videoRef.current.play();
    setShowModal("false");
    setCurrentWordIndex(0);
    setCurrentExampleIndex(0);
    setCurrentImageIndex(0);
  };

  const cueLogger = () => {
    console.log(
      "Hi i'm from cuelogger",
      videoRef.current.textTracks[0].cues[1]
    );
  };

  React.useEffect(() => {
    (function () {
      // Obtain handles to main elements
      const video = videoRef.current;
      const track = trackRef.current;
      let counter = 1;
      const colorNumGenerator = () => {
        counter++;
        return (counter % 7) + 1;
      };
      track.addEventListener("cuechange", (event) => {
        // console.log("data", data);
        if (event.target.track?.activeCues[0]?.text) {
          //////////////
          const currentCueId = event.target.track?.activeCues[0]?.id;
          const currentWords = data.filter(
            (item) => item.subtitleWord[0].cueId === currentCueId
          );
          // I WANT TO AVOID SETTING AN EMPTY ARRAY AS "currentDataSet" , BECAUSE IN THAT CASE THERE WOULD BE NO WORDS TO DESTRUCTURE AND WE GET ERRORS:
          if (currentWords.length > 0) setCurrentDataSet(currentWords);
          const currentSubtitlePhrasedWords = currentWords.filter(
            (item) => item.subtitleWord.length > 1
          );
          const currentSubtitlePhrasedWordsAndColors =
            currentSubtitlePhrasedWords.map((word) => ({
              word: word,
              colorNumber: colorNumGenerator(),
            }));

          // console.log("current words", currentWords);
          /////////////
          let text = event.target.track?.activeCues[0]?.text;
          // Text with /n seperated from the words
          text = text.replaceAll(".", " .").replaceAll("?", " ?");
          const lines = text.split("\n"); // Output example :  ["How are you?","I'm fine.","Thank you."]
          let words = lines.map((line) => line.split(" ")); // Output example :  [["How", " are"," you? "],["I'm", "fine.","Thank", "you."]]
          words = words.map((line) => line.map((word) => word.trim()));
          // Now let's remove the possible whitespace from both ends of a word:
          // Output example :  [["How", "are","you?"],["I'm", "fine.","Thank", "you."]]
          // const colors = ["text-primary", "text-success", "text-danger"];
          const newRows = words.map((line) => (
            <div className="d-flex justify-content-center">
              {line.map((word) => {
                const dataItem = currentWords.find((item) =>
                  item.subtitleWord.find(
                    (subtitleItem) => subtitleItem.title === word
                  )
                );
                let INDEX;
                if (dataItem) {
                  INDEX = currentWords.indexOf(dataItem);
                }

                if (dataItem && dataItem.subtitleWord.length > 1) {
                  const phrasedSubWordAndColor =
                    currentSubtitlePhrasedWordsAndColors.find(
                      (item) => item.word === dataItem
                    );
                  const colorNum = phrasedSubWordAndColor.colorNumber;
                  return (
                    <button
                      className={`subRow mx-2 color${colorNum}`}
                      onClick={() =>
                        wordClickHandler(
                          process.env.REACT_APP_BACKEND_URL +
                            `/images/${data[`${word}`]}.png`,
                          INDEX
                        )
                      }
                      // data-bs-toggle="modal"
                      // data-bs-target="#exampleModal"
                    >
                      {word}
                    </button>
                  );
                }
                if (dataItem && dataItem.subtitleWord.length === 1) {
                  // setPronunciationSrc(
                  //   process.env.REACT_APP_BACKEND_URL +
                  //     `/audios/${data[`${word}`]}_Am.mp3`
                  // );
                  return (
                    <button
                      className={`subRow mx-2 color${colorNumGenerator()}`}
                      onClick={() =>
                        wordClickHandler(
                          process.env.REACT_APP_BACKEND_URL +
                            `/images/${data[`${word}`]}.png`,
                          INDEX
                        )
                      }
                      // data-bs-toggle="modal"
                      // data-bs-target="#exampleModal"
                    >
                      {word}
                    </button>
                  );
                } else return <button className=" subRow mx-2">{word}</button>;
              })}
            </div>
          ));
          setRows(newRows);
        } else setRows([]);
      });

      // Turn off all subtitles
      for (var i = 0; i < video.textTracks.length; i++) {
        video.textTracks[i].mode = "hidden";
      }

      //////////////////////////////////////////////////////////////
      // Listen for fullscreen change events (from other controls, e.g. right clicking on the video itself)
      document.addEventListener("fullscreenchange", function (e) {
        setFullscreenData(
          !!(document.fullScreen || document.fullscreenElement)
        );
      });
      document.addEventListener("webkitfullscreenchange", function () {
        setFullscreenData(!!document.webkitIsFullScreen);
      });
      document.addEventListener("mozfullscreenchange", function () {
        setFullscreenData(!!document.mozFullScreen);
      });
      document.addEventListener("msfullscreenchange", function () {
        setFullscreenData(!!document.msFullscreenElement);
      });
    })();
  }, []);
  ////////////// HLS.js player
  // React.useEffect(() => {
  //   (function () {
  //     const videoElement = videoRef.current;

  //     if (Hls.isSupported()) {
  //       const hls = new Hls();
  //       hls.loadSource(
  //         process.env.REACT_APP_BACKEND_URL +
  //           // `/courses-data/friends/section1/playlist/output_playlist.m3u8`
  //           `/playlist/output_playlist.m3u8`
  //       );
  //       hls.attachMedia(videoElement);
  //     } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
  //       videoElement.src =
  //         process.env.REACT_APP_BACKEND_URL +
  //         // `/courses-data/friends/section1/playlist/output_playlist.m3u8`;
  //         `/playlist/output_playlist.m3u8`;
  //     }
  //   })();
  // }, []);

  ////////////////////////
  //DESTRUCTURING THE CURRENT WORD DATA
  // console.log(
  //   "data to destructure",
  //   currentDataSet[currentDataIndex]?.databaseWord[currentWordIndex]
  // );
  const {
    word,
    pronunciation,
    frequency,
    partOfSpeech,
    register,
    additionalInfo,
    translation,
    meaning,
    images,
  } = currentDataSet[currentDataIndex].databaseWord[currentWordIndex];
  /////////////////////

  const playPronunciation = (accent) => {
    const audioName = `${word}_${accent}.mp3`;
    setPronunciationSrc(
      process.env.REACT_APP_BACKEND_URL + `/static-files/audios/${audioName}`
    );
  };

  ///////////////
  return (
    <figure
      id="vp-videoContainer"
      className=" d-flex justify-content-center align-items-center "
      data-fullscreen="false"
      ref={videoContainerRef}
    >
      <div className=" position-relative video-box d-flex flex-column bg-dark">
        <video
          id="vp-video"
          className="vp-player p-0 m-0 mx-auto  "
          // controls
          ref={videoRef}
          preload="metadata"
          // crossOrigin="anonymous"
          onPlay={() => changeButtonState("playpause")}
          onPause={() => changeButtonState("playpause")}
          onTimeUpdate={handleProgressUpdate}
          onLoadedMetadata={handleProgressMaxValue}
        >
          <source src={videoSrc} />
          {/* PLEASE PAY ATTENTION THAT FOR THE EXPRESS.JS TO SERVE STATIC FILES, THE VIDEO OR SUBTITLE SRC MUST BE SOME THING LIKE THE STRING BELOW:
          <source src="http://localhost:5000/api/static-files/courses-data/A/section_1/A1.mp4" />

          AS YOU SEE THE PART "/api" IS NEEDED AND THE "epress.static" METHOD SHOULD BE USED LIKE THIS:
          app.use("/api/static-files", express.static("static-files"));
         

           */}

          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={subtitleURL}
            // src={process.env.REACT_APP_BACKEND_URL + "/playlist/friends1.vtt"}
            default
            id="vp-track"
            ref={trackRef}
            onLoad={cueLogger}
          />
        </video>
        <div className=" subtitles w-100 position-absolute">{rows}</div>
        <div
          id="vp-video-controls"
          className="vp-controls row bg-dark w-100   "
          data-state="visible"
          ref={videoControlsRef}
        >
          <progress
            id="vp-progress"
            value="0"
            // min="0"
            max="100"
            ref={progressRef}
            onClick={handleProgressClick}
          ></progress>
          <div className="vp-controls-buttons d-flex justify-content-around align-items-center">
            <button
              id="vp-playpause"
              type="button"
              data-state="play"
              ref={playpauseRef}
              onClick={handlePlayPause}
            >
              Play/Pause
            </button>
            <button
              id="vp-stop"
              type="button"
              data-state="stop"
              ref={stopRef}
              onClick={handleStop}
            >
              Stop
            </button>
            <button
              id="vp-mute"
              type="button"
              data-state="mute"
              ref={muteRef}
              onClick={handleMute}
            >
              Mute/Unmute
            </button>
            <input
              id="vp-volume"
              type="range"
              ref={volumeRef}
              onInput={handleVolumeChange}
            />
            <div className="middle-holder"></div>

            <button
              id="vp-fs"
              type="button"
              data-state="go-fullscreen"
              ref={fullscreenRef}
              onClick={handleFullscreen}
            >
              Fullscreen
            </button>
          </div>
        </div>
        {/* AUDIO PLAYER: This audio player is not sth we see in the UI (pay attention to the hidden attribute assigned to it), it just plays the pronunciation audio in the background when needed. */}
        {pronunciationSrc ? (
          <audio
            src={pronunciationSrc}
            autoPlay
            hidden
            // play={pronunciationSrc}
            onEnded={() => setPronunciationSrc(null)}
          />
        ) : null}

        <div
          className="modal"
          // onClick={handleCloseModal}
          data-showModal={showModal}
        >
          <div className="main-data">
            <div className="main-nav">
              <div>
                <button
                  className="back"
                  onClick={() => {
                    setCurrentWordIndex(currentWordIndex - 1);
                  }}
                  disabled={!activeWordsBackwardArrow}
                  title="Back to previous highlighted word"
                ></button>

                <button
                  className="forward"
                  onClick={() => {
                    setCurrentWordIndex(currentWordIndex + 1);
                  }}
                  disabled={!activeWordsForwardArrow}
                  title="Forward to next highlighted word"
                ></button>
              </div>
              <button
                className="close"
                onClick={handleCloseModal}
                title="Close the modal"
              ></button>
            </div>
            <div className="head">
              <h5 className="word">{word}</h5>
              <p>{pronunciation}</p>
              <div className="pronunciation">
                <button
                  onClick={() => playPronunciation("Br")}
                  className="Br"
                  title="Play British pronunciation"
                ></button>
                <button
                  onClick={() => playPronunciation("Am")}
                  className="Am"
                  title="Play American pronunciation"
                ></button>
              </div>
            </div>
            <div className="other-info">
              {partOfSpeech ? (
                <p className="part-of-speech">{partOfSpeech}</p>
              ) : null}
              {register ? <p className="register">{register}</p> : null}
              {frequency.written ? <p>{frequency.written}</p> : null}
              {additionalInfo ? (
                <p className="additional-info">{additionalInfo}</p>
              ) : null}
            </div>

            <p className="definition">
              <span>{meaning.index === 0 ? "" : meaning.index + 1 + ") "}</span>
              {meaning.definition}
            </p>
            {showExamplesPart ? (
              <div className="vp-examples">
                <div className="examples-nav">
                  <button
                    className="previous"
                    onClick={() =>
                      setCurrentExampleIndex(currentExampleIndex - 1)
                    }
                    disabled={!activeExamplesBackwardArrow}
                    title="Back to previous example"
                  ></button>
                  <h5> examples</h5>
                  <button
                    className="next"
                    onClick={() =>
                      setCurrentExampleIndex(currentExampleIndex + 1)
                    }
                    disabled={!activeExamplesForwardArrow}
                    title="Back to previous example"
                  ></button>
                </div>

                <p>{meaning.examples[currentExampleIndex]}</p>
              </div>
            ) : null}

            {showImagesPart ? (
              <div className="vp-images">
                <div className="images-nav">
                  <button
                    className="previous"
                    onClick={() => setCurrentImageIndex(currentImageIndex - 1)}
                    disabled={!activeImagesBackwardArrow}
                    title="Back to previous image"
                  ></button>
                  <h5> images</h5>
                  <button
                    className="next"
                    onClick={() => setCurrentImageIndex(currentImageIndex + 1)}
                    disabled={!activeImagesForwardArrow}
                    title="Forward to next image"
                  ></button>
                </div>
                <img
                  src={
                    process.env.REACT_APP_BACKEND_URL +
                    `/static-files/images/${word}_${images[currentImageIndex]}.jpg`
                  }
                  // src={
                  //   process.env.REACT_APP_BACKEND_URL +
                  //   `/static-files/images/hump_1.jpg`
                  // }
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </figure>
  );
};

export default VideoPlayer;
