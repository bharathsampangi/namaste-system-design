import React from "react";

const VideoStream = () => {
  return (
    <div className="m-5">
      <iframe
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/45CFECaKC5w"
        title="🔴LIVE! -  OG RENEGADE RAIDER ITEM SHOP in FORTNITE!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoStream;
