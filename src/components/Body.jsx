import React, { useEffect, useState } from "react";
import YoutubeCard from "./YoutubeCard";
import SkeletonYoutubeCard from "../skeletons/SkeletonYoutubeCard";

const options = {
  params: { hl: "en", gl: "US" },

  headers: {
    "X-RapidAPI-Key": "0efa9736f1msh6c766df2f328a27p172326jsn1bfddb811d07",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  },
};

const Body = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://youtube138.p.rapidapi.com/home/",
        options
      );
      const data = await response.json();
      setVideos(data.contents);
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);
  return (
    <div className="bg-black w-full min-h-full  p-8 text-white ">
      <div className="grid grid-cols-4 gap-5 p-5 ">
        {videos &&
          videos.map((video, index) => (
            <YoutubeCard key={index} video={video.video} />
          ))}
        {!videos &&
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((element) => (
            <SkeletonYoutubeCard key={element} />
          ))}
      </div>
    </div>
  );
};

export default Body;
