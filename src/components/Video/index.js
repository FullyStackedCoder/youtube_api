import React, { Component } from "react";
import { StyledVideo } from "./styles";
import VideoTime from "../VideoTime";

class Video extends Component {
  onClickHandler = event => {
    console.log(event.target);
    window.scrollTo(0, 0);
  };

  render() {
    return (
      <StyledVideo onClick={event => this.onClickHandler(event)}>
        <img
          src={this.props.video.snippet.thumbnails.high.url}
          alt="Video"
          className="video__img"
        ></img>
        <p className="video__time">
          <VideoTime id={this.props.video.id.videoId} />
        </p>
        <div className="video__title">
          <p>
            {this.props.video.snippet.title
              ? this.props.video.snippet.title.substring(0, 25) + "..."
              : ""}
          </p>
          <p>by {this.props.video.snippet.channelTitle}</p>
        </div>
      </StyledVideo>
    );
  }
}

export default Video;
