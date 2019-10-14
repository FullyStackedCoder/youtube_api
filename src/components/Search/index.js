import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { StyledSearch } from "./styles";
import Icon from "../Icon";
import { ICONS } from "../../lib/globalIcons";

import * as actions from "../../store/actions";

class Search extends Component {
  state = {
    loading: false,
    searchTerm: ""
  };

  searchInput = React.createRef();

  onChangeHandler = e => {
    this.props.onChange(e.target.value);
  };

  onSubmit = event => {
    event.preventDefault();
    let path = `results?search_query=${this.searchInput.current.value}`;
    this.props.history.push(path);

    this.props.onChange(this.searchInput.current.value);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <StyledSearch>
          <div className="full-width">
            <div className="searchIcon">
              <Icon
                icon={ICONS.SEARCHICON}
                size={18}
                color="rgba(0,0,0,0.54)"
              />
            </div>
            <input
              type="text"
              ref={this.searchInput}
              className={this.state.loading ? "loading" : ""}
              placeholder="Search..."
              id="search"
              onChange={e => {
                e.persist();
                this.onChangeHandler(e);
              }}
              value={this.props.searchTerm}
            />
            <button type="submit" className="searchButton">
              Search
            </button>
          </div>
        </StyledSearch>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    videos: state.videos,
    loading: state.loading,
    errors: state.error,
    nextPageToken: state.nextPageToken,
    totalResults: state.totalResults,
    searchTerm: state.searchTerm
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetch: nextPageToken =>
      dispatch(actions.fetchHomeVideos(nextPageToken, "search")),
    onSearch: (nextPageToken, searchTerm) =>
      dispatch(actions.fetchSearchVideos(nextPageToken, searchTerm)),
    onChange: searchTerm => dispatch(actions.setSearchTerm(searchTerm))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Search)
);
