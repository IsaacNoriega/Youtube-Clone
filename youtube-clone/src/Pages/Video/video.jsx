// eslint-disable-next-line no-unused-vars
import React from "react";
import './video.css';
import PlayVideo from "../../Components/PlayVideo/play.video";
import Recommended from "../../Components/Recommended/recommended";

const Video = () => {
  return(
    <div className="play-container">
      <PlayVideo/>
      <Recommended/>
    </div>
  )
}

export default Video;