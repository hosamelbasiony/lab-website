"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function LazyYoutube() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div className="p-0 my-0 mx-auto text-center0 border flex flex-row justify-around h-full border-red-700">
      <div>
        <YouTube
          className="w-full h-full mx-auto mb-8 mt-0"
          // videoId="oZBHHXDUSI8"
          videoId="AKuhbcOCHNM" 
          opts={opts}
          onReady={onPlayerReady}
        />
      </div>
    </div>
  );
}
