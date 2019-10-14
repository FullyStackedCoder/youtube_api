import React, { useEffect, useState } from "react";
import axios from "axios";

const VideoTime = props => {
  const [getTime, setTime] = useState("");
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${props.id}&key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setTime(response.data.items[0].contentDetails.duration);
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {getTime
        .replace("PT", "")
        .replace("H", ":")
        .replace("M", ":")
        .replace("S", "")}
    </>
  );
};

export default VideoTime;
