import React, { useEffect, useState } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Spinner from "react-bootstrap/Spinner";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

const VideoTime = props => {
  const [getVideo, setVideo] = useState({});
  const [open, setOpen] = useState(false);
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${props.id}&key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setVideo(response.data.items[0].snippet);
      })
      .catch(error => {
        console.log(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.id]);

  const loader = (
    <Row className="justify-content-center">
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </Row>
  );

  const content = (
    <>
      <div className={"embed-responsive embed-responsive-16by9"}>
        <iframe
          title={getVideo.title}
          className={"embed-responsive-item"}
          src={`https://www.youtube.com/embed/${props.id}`}
          allowFullScreen
        />
      </div>
      <div>
        <h5>{getVideo.title}</h5>
        <h5>by {getVideo.channelTitle}</h5>
        <div>
          {getVideo.description && !open
            ? `${getVideo.description.substring(0, 250)}...`
            : ""}
        </div>
        <Collapse in={open}>
          <div id="full-description">{getVideo.description}</div>
        </Collapse>
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="Show Video Description"
          aria-expanded={open}
          className="my-3"
        >
          Show more...
        </Button>
      </div>
    </>
  );

  return <>{getVideo.title ? content : loader}</>;
};

export default VideoTime;
