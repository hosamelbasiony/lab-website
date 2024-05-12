"use client"

export default function VideoPage() {
  return (
    <video className="w-full h-full" controls muted autoPlay loop poster="/images/cover.png" preload="true">
      <source src="/video_2024-05-09_20-52-56.mp4" type="video/mp4" />
      <track
        src="/video_2024-05-09_20-52-56.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  )
  }