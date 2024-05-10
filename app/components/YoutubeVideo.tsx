"use client";

import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

export default function LazyYoutube() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <YouTube
      className="w-full mx-auto my-12"
      videoId="oZBHHXDUSI8"
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
