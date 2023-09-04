import React, { useState, useRef } from "react";
import "./VideoPlayer.css";
import Carousel from "react-bootstrap/Carousel";
import Hls from "hls.js";

const VideoPlayer = ({ data, videoSrc, subtitle }) => {
  ////////////////////////////////////////////////////////////////////////
  // STATES:
  const [rows, setRows] = useState([]);
  const [imageSrc, setImageSrc] = useState("");
  const [showModal, setShowModal] = useState("false");
  const [playingPronunciation, setPlayingPronunciation] = useState(false);
  const [pronunciationSrc, setPronunciationSrc] = useState("");
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
  ////////////////////////////////////////////////////
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

  const wordClickHandler = (event) => {
    videoRef.current.pause();
    setShowModal("true");
  };

  const closeModalHandler = () => {
    videoRef.current.play();
    setShowModal("false");
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

      track.addEventListener("cuechange", (event) => {
        // console.log(event);
        if (event.target.track?.activeCues[0]?.text) {
          let text = event.target.track?.activeCues[0]?.text;
          // Text with /n seperated from the words
          text = text.replaceAll(".", " .").replaceAll("?", " ?");
          const lines = text.split("\n"); // Output example :  ["How are you?","I'm fine.","Thank you."]
          let words = lines.map((line) => line.split(" ")); // Output example :  [["How", " are"," you? "],["I'm", "fine.","Thank", "you."]]
          words = words.map((line) => line.map((word) => word.trim()));
          // Now let's remove the possible whitespace from both ends of a word:
          // Output example :  [["How", "are","you?"],["I'm", "fine.","Thank", "you."]]
          let counter = 0;
          const colors = ["text-primary", "text-success", "text-danger"];
          const newRows = words.map((line) => (
            <div className="d-flex justify-content-center">
              {line.map((word) => {
                if (data[`${word}`]) {
                  counter++;
                  setImageSrc(
                    process.env.REACT_APP_BACKEND_URL +
                      `/images/${data[`${word}`]}.png`
                  );
                  setPronunciationSrc(
                    process.env.REACT_APP_BACKEND_URL +
                      `/audios/${data[`${word}`]}_Am.mp3`
                  );
                  return (
                    <button
                      className={`subRow mx-2 ${colors[counter - 1]}`}
                      onClick={wordClickHandler}
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
  React.useEffect(() => {
    (function () {
      const videoElement = videoRef.current;

      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(
          process.env.REACT_APP_BACKEND_URL +
            // `/courses-data/friends/section1/playlist/output_playlist.m3u8`
            `/playlist/output_playlist.m3u8`
        );
        hls.attachMedia(videoElement);
      } else if (videoElement.canPlayType("application/vnd.apple.mpegurl")) {
        videoElement.src =
          process.env.REACT_APP_BACKEND_URL +
          // `/courses-data/friends/section1/playlist/output_playlist.m3u8`;
          `/playlist/output_playlist.m3u8`;
      }
    })();
  }, []);
  /////////////////////
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
          {/* <source
              src={process.env.REACT_APP_BACKEND_URL + `/video/friends/1`}
            /> */}
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src={subtitle}
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
        {playingPronunciation ? (
          <audio
            src={pronunciationSrc}
            autoPlay
            hidden
            // play={playingPronunciation}
            onEnded={() => setPlayingPronunciation(false)}
          />
        ) : null}

        <div
          className="vp-modal-background"
          // onClick={closeModalHandler}
          data-showModal={showModal}
        >
          <div className="vp-modal-content">
            <div className="vp-modal-top-bar">
              <div
                className="bg-primary"
                onClick={() => {
                  // setPronunciationSrc(pronunciationSrc + "_Am.mp3")
                  setPlayingPronunciation(true);
                }}
              >
                <span className="vp-modal-top-bar-icon vp-AmP"></span>{" "}
                <span>Am</span>
              </div>
              <div
                className="bg-warning "
                onClick={() => {
                  // setPronunciationSrc(pronunciationSrc + "_Am.mp3")
                  setPlayingPronunciation(true);
                }}
              >
                <span className="vp-modal-top-bar-icon vp-BrP"></span>{" "}
                <span>Br</span>
              </div>

              <div className="bg-danger " onClick={closeModalHandler}>
                <span className="vp-modal-top-bar-icon vp-modal-close "></span>
                <span>Close</span>
              </div>
            </div>

            <Carousel>
              <Carousel.Item interval={100000}>
                <img
                  id="vp-image"
                  className="image"
                  src={imageSrc}
                  ref={imageRef}
                />

                <Carousel.Caption>
                  <h5 className="text-primary">ترجمه فارسی</h5>
                  <p> خود توضیح انگلیسی رو بخون </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </figure>
  );
};

export default VideoPlayer;
