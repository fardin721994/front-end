import React, { useState, useRef } from "react";
import "./VideoPlayer.css";
import Carousel from "react-bootstrap/Carousel";
import Hls from "hls.js";

const VideoPlayer = ({ data, videoSrc, subtitle }) => {
  const [rows, setRows] = useState([]);
  const [imageSrc, setImageSrc] = useState("");
  const [showModal, setShowModal] = useState("false");
  const [playingPronunciation, setPlayingPronunciation] = useState(false);
  const [pronunciationSrc, setPronunciationSrc] = useState("");

  const video = useRef();

  const wordClickHandler = (event) => {
    video.current.pause();
    setShowModal("true");
  };

  const closeModalHandler = () => {
    video.current.play();
    setShowModal("false");
  };

  React.useEffect(() => {
    (function () {
      // "use strict";

      // Does the browser actually support the video element?
      var supportsVideo = !!document.createElement("video").canPlayType;

      if (supportsVideo) {
        // Obtain handles to main elements
        var videoContainer = document.getElementById("vp-videoContainer");
        var video = document.getElementById("vp-video");
        var image = document.getElementById("vp-image");
        var track = document.getElementById("vp-track");
        var videoControls = document.getElementById("vp-video-controls");
        // console.log(video.textTracks[0].cues[1]);
        // console.log(["a", "b", "c"]);
        track.addEventListener(`load`, () => {
          console.log(video.textTracks[0].cues[1]);
        });

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
                  } else
                    return <button className=" subRow mx-2">{word}</button>;
                })}
              </div>
            ));
            setRows(newRows);
            // From MDN about fullscreen mode:
            // function toggleFullscreen() {
            //   let elem = document.querySelector("video");

            //   if (!document.fullscreenElement) {
            //     elem.requestFullscreen().catch((err) => {
            //       alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            //     });
            //   } else {
            //     document.exitFullscreen();
            //   }
            // }
          } else setRows([]);
        });

        // Hide the default controls
        video.controls = false;

        // Display the user defined video controls
        videoControls.setAttribute("data-state", "visible");

        // Obtain handles to buttons and other elements
        var playpause = document.getElementById("vp-playpause");
        var stop = document.getElementById("vp-stop");
        var mute = document.getElementById("vp-mute");
        const volume = document.getElementById("vp-volume");

        // var volinc = document.getElementById("vp-volinc");
        // var voldec = document.getElementById("vp-voldec");
        var progress = document.getElementById("vp-progress");
        var progressBar = document.getElementById("vp-progress-bar");
        // const progressBar = document.getElementById("video-progress");
        var fullscreen = document.getElementById("vp-fs");
        // var subtitles = document.getElementById("vp-subtitles");

        // If the browser doesn't support the progress element, set its state for some different styling
        var supportsProgress =
          document.createElement("progress").max !== undefined;
        if (!supportsProgress) progress.setAttribute("data-state", "fake");

        // Check if the browser supports the Fullscreen API
        var fullScreenEnabled = !!(
          document.fullscreenEnabled ||
          document.mozFullScreenEnabled ||
          document.msFullscreenEnabled ||
          document.webkitSupportsFullscreen ||
          document.webkitFullscreenEnabled ||
          document.createElement("video").webkitRequestFullScreen
        );
        // If the browser doesn't support the Fulscreen API then hide the fullscreen button
        if (!fullScreenEnabled) {
          fullscreen.style.display = "none";
        }

        // Check the volume
        // var checkVolume = function (dir) {
        //   if (dir) {
        //     var currentVolume = Math.floor(video.volume * 10) / 10;
        //     if (dir === "+") {
        //       if (currentVolume < 1) video.volume += 0.1;
        //     } else if (dir === "-") {
        //       if (currentVolume > 0) video.volume -= 0.1;
        //     }
        //     // If the volume has been turned off, also set it as muted
        //     // Note: can only do this with the custom control set as when the 'volumechange' event is raised, there is no way to know if it was via a volume or a mute change
        //     if (currentVolume <= 0) video.muted = true;
        //     else video.muted = false;
        //   }
        //   changeButtonState("mute");
        // };

        // Change the volume
        // var alterVolume = function (dir) {
        //   checkVolume(dir);
        // };

        // Set the video container's fullscreen state
        var setFullscreenData = function (state) {
          videoContainer.setAttribute("data-fullscreen", !!state);
          // Set the fullscreen button's 'data-state' which allows the correct button image to be set via CSS
          fullscreen.setAttribute(
            "data-state",
            !!state ? "cancel-fullscreen" : "go-fullscreen"
          );
        };

        // Checks if the document is currently in fullscreen mode
        var isFullScreen = function () {
          return !!(
            document.fullScreen ||
            document.webkitIsFullScreen ||
            document.mozFullScreen ||
            document.msFullscreenElement ||
            document.fullscreenElement
          );
        };

        // Fullscreen
        var handleFullscreen = function () {
          // If fullscreen mode is active...
          if (isFullScreen()) {
            // ...exit fullscreen mode
            // (Note: this can only be called on document)
            if (document.exitFullscreen) document.exitFullscreen();
            else if (document.mozCancelFullScreen)
              document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen)
              document.webkitCancelFullScreen();
            else if (document.msExitFullscreen) document.msExitFullscreen();
            setFullscreenData(false);
          } else {
            // ...otherwise enter fullscreen mode
            // (Note: can be called on document, but here the specific element is used as it will also ensure that the element's children, e.g. the custom controls, go fullscreen also)

            if (videoContainer.requestFullscreen) {
              videoContainer.requestFullscreen();
            } else if (videoContainer.mozRequestFullScreen) {
              videoContainer.mozRequestFullScreen();
            } else if (videoContainer.webkitRequestFullScreen) {
              // Safari 5.1 only allows proper fullscreen on the video element. This also works fine on other WebKit browsers as the following CSS (set in styles.css) hides the default controls that appear again, and
              // ensures that our custom controls are visible:
              // figure[data-fullscreen=true] video::-webkit-media-controls { display:none !important; }
              // figure[data-fullscreen=true] .controls { z-index:2147483647; }
              video.webkitRequestFullScreen();
            } else if (videoContainer.msRequestFullscreen)
              videoContainer.msRequestFullscreen();
            setFullscreenData(true);
          }
        };

        // Only add the events if addEventListener is supported (IE8 and less don't support it, but that will use Flash anyway)
        if (document.addEventListener) {
          // Wait for the video's meta data to be loaded, then set the progress bar's max value to the duration of the video

          video.addEventListener("loadedmetadata", function () {
            progress.setAttribute("max", video.duration);
          });
          // track.addEventListener("onChange", (e) => console.log("event", e));
          // track.addEventListener("cuechange", (event) => {
          //   let cues = event.target.track.activeCues;
          //   console.log(event.target.track?.activeCues[0]?.text);
          // });
          // Changes the button state of certain button's so the correct visuals can be displayed with CSS
          var changeButtonState = function (type) {
            // Play/Pause button
            if (type == "playpause") {
              if (video.paused || video.ended) {
                playpause.setAttribute("data-state", "play");
              } else {
                playpause.setAttribute("data-state", "pause");
              }
            }
            // Mute button
            else if (type == "mute") {
              mute.setAttribute("data-state", video.muted ? "unmute" : "mute");
            }
          };

          // Add event listeners for video specific events
          video.addEventListener(
            "play",
            function () {
              changeButtonState("playpause");
            },
            false
          );
          video.addEventListener(
            "pause",
            function () {
              changeButtonState("playpause");
            },
            false
          );
          // video.addEventListener(
          //   "volumechange",
          //   function () {
          //     checkVolume();
          //   },
          //   false
          // );

          // Add events for all buttons
          playpause.addEventListener("click", function (e) {
            // console.log("hello ");

            if (video.paused || video.ended) video.play();
            else video.pause();
          });

          // Turn off all subtitles
          for (var i = 0; i < video.textTracks.length; i++) {
            video.textTracks[i].mode = "hidden";
          }

          // The Media API has no 'stop()' function, so pause the video and reset its time and the progress bar
          stop.addEventListener("click", function (e) {
            video.pause();
            video.currentTime = 0;
            progressBar.value = 0;
            // Update the play/pause button's 'data-state' which allows the correct button image to be set via CSS
            changeButtonState("playpause");
          });
          mute.addEventListener("click", function (e) {
            video.muted = !video.muted;
            changeButtonState("mute");
          });

          volume.addEventListener("input", function (event) {
            video.volume = event.target.value / 100;
          });
          // progressBar.addEventListener("input", function (event) {
          //   video.currentTime = (event.target.value / 100) * video.duration;
          // });
          // volinc.addEventListener("click", function (e) {
          //   alterVolume("+");
          // });
          // voldec.addEventListener("click", function (e) {
          //   alterVolume("-");
          // });
          fullscreen.addEventListener("click", function (e) {
            handleFullscreen();
          });

          // As the video is playing, update the progress bar
          video.addEventListener("timeupdate", function () {
            // For mobile browsers, ensure that the progress element's max attribute is set
            if (!progress.getAttribute("max"))
              progress.setAttribute("max", video.duration);
            progress.value = video.currentTime;
            progressBar.style.width =
              Math.floor((video.currentTime / video.duration) * 100) + "%";
          });
          // video.addEventListener("timeupdate", function () {
          //   progressBar.value = Math.floor(
          //     (video.currentTime / video.duration) * 100
          //   );
          // });

          // React to the user clicking within the progress bar
          progress.addEventListener("click", function (e) {
            // Also need to take the parents into account here as .controls and figure now have position:relative
            var pos =
              (e.pageX -
                (this.offsetLeft +
                  this.offsetParent.offsetLeft +
                  this.offsetParent.offsetParent.offsetLeft)) /
              this.offsetWidth;
            video.currentTime = pos * video.duration;
          });

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
        }
      }
    })();
  }, []);
  ////////////// HLS.js player
  React.useEffect(() => {
    (function () {
      const videoElement = video.current;

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
    <React.Fragment>
      <figure
        id="vp-videoContainer"
        className=" d-flex justify-content-center align-items-center "
        data-fullscreen="false"
      >
        <div className=" position-relative video-box d-flex flex-column bg-dark">
          <video
            id="vp-video"
            className="vp-player p-0 m-0 mx-auto  "
            // controls
            ref={video}
            preload="metadata"
            // crossOrigin="anonymous"
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
            />
          </video>
          <div className=" subtitles w-100 position-absolute">{rows}</div>
          <div
            id="vp-video-controls"
            className="vp-controls row bg-dark w-100   "
            data-state="hidden"
          >
            <div className="vp-progress pb-2">
              <progress id="vp-progress" value="0" min="0" max="100">
                <span id="vp-progress-bar"></span>
              </progress>
            </div>
            {/* <input id="video-progress" type="range" /> */}

            <div className="vp-controls-buttons d-flex justify-content-around align-items-center">
              <button id="vp-playpause" type="button" data-state="play">
                Play/Pause
              </button>
              <button id="vp-stop" type="button" data-state="stop">
                Stop
              </button>
              <button id="vp-mute" type="button" data-state="mute">
                Mute/Unmute
              </button>
              <input id="vp-volume" type="range" />
              <div className="middle-holder"></div>
              {/* <button id="vp-volinc" type="button" data-state="volup">
                Vol+
              </button>
              <button id="vp-voldec" type="button" data-state="voldown">
                Vol-
              </button> */}
              <button id="vp-fs" type="button" data-state="go-fullscreen">
                Fullscreen
              </button>
            </div>
          </div>
          {playingPronunciation ? (
            <audio
              src={pronunciationSrc}
              autoPlay
              hidden
              // play={playingPronunciation}
              onEnded={() => setPlayingPronunciation(false)}
            />
          ) : null}
          {/* <Modal
            show={showModal}
            onCancel={closeModalHandler}
            contentClass="place-item__modal-content"
            footerClass="place-item__modal-actions"
            footer={<button onClick={closeModalHandler}>CLOSE</button>}
          >
            <img id="vp-image" className="image" src={imageSrc} />
          </Modal> */}
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
                  <img id="vp-image" className="image" src={imageSrc} />

                  <Carousel.Caption>
                    <h5 className="text-primary">ترجمه فارسی</h5>
                    <p> خود توضیح انگلیسی رو بخون </p>
                  </Carousel.Caption>
                </Carousel.Item>
                {/* <Carousel.Item interval={500}>
                  <img id="vp-image" className="image" src={imageSrc} />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item> */}
              </Carousel>
            </div>
          </div>
        </div>
      </figure>
    </React.Fragment>
  );
};

export default VideoPlayer;
