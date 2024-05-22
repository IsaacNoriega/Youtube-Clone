// eslint-disable-next-line no-unused-vars
import React from "react";
import './video.css';
import PlayVideo from "../../Components/PlayVideo/play.video";
import Recommended from "../../Components/Recommended/recommended";
import { useParams } from "react-router-dom";

const Video = () => {
  
  const { videoId , categoryId} = useParams();

  return(
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recommended/>
    </div>
  )
}

export default Video;