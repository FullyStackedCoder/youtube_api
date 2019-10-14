import React, { Component } from "react";

import { StyledSingleVideo } from "./styles";
import VideoTime from "../../components/VideoTime";

class SingleVideo extends Component {
  render() {
    return (
      <StyledSingleVideo>
        <img
          src={this.props.video.snippet.thumbnails.medium.url}
          alt="House 1"
          className="video__img"
        ></img>
        <h5 className="video__title">{this.props.video.snippet.title}</h5>
        <h5 className="video__title">
          by {this.props.video.snippet.channelTitle}
        </h5>
        {this.props.searchType === "search" ? (
          <p className="video__time">
            <VideoTime id={this.props.id} />
          </p>
        ) : (
          <p className="video__time">
            {this.props.video.contentDetails.duration
              .replace("PT", "")
              .replace("H", ":")
              .replace("M", ":")
              .replace("S", "")}
          </p>
        )}
        {/* <p className="video__time">
          {this.props.video.contentDetails.duration
            .replace("PT", "")
            .replace("H", ":")
            .replace("M", ":")
            .replace("S", "")}
        </p> */}
      </StyledSingleVideo>
      //   <styledSingleVideo>
      //     <div className="video__img">
      //       <img
      //         src={this.props.video.snippet.thumbnails.medium.url}
      //         alt="House 1"
      //         className="video__img"
      //       ></img>
      //     </div>
      //   </styledSingleVideo>
    );
  }
}

export default SingleVideo;
