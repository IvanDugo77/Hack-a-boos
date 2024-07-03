import { useRef, useState } from "react";
import "./Video.css";

const Video = () => {
  const ref = useRef();
  const [showPlay, setShowPlay] = useState(true);

  const handleClick = () => {
    //console.log("PLAY");
    // NO con DOM
    //const videoElement = document.querySelector("video");
    //console.log(videoElement);
    //videoElement.play();
    setShowPlay(false);
    ref.current.play();
  };

  return (
    <main className="contenido">
      <div className="player">
        {showPlay && (
          <div className="controls">
            <div onClick={handleClick} className="play-button">
              ▷
            </div>
          </div>
        )}
        <video controls={!showPlay} src="/demo-video.mp4" ref={ref} />
      </div>
    </main>
  );
};

export default Video;
