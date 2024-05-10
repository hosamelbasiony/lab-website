"use client"

export default function VideoPage() {
  return (
    <video width="320" height="240" controls preload="none">
      <source src="/video_2024-05-09_20-52-56.mp4" type="video/mp4" />
      <track
        src="/path/to/captions.vtt"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
  }