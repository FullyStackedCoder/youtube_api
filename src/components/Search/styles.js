import styled, { keyframes } from "styled-components";

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }
  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

const StyledSearch = styled.div`
  .full-width {
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-wrap: wrap;
    input {
      flex: 1 1 90%;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.23);
      border-right: none;
      border-left: none;
      padding: 0.7rem 0rem;
      width: 100%;
      transition: all 0.2s;
      // position: relative;
      &:focus {
        outline: none;
        background-color: #fff;
      }
      &.loading {
        animation: ${glow} 0.5s ease-in-out infinite alternate;
      }
      &::-webkit-input-placeholder {
        font-weight: 100;
        color: #ccc;
      }
      // @media only screen and (max-width: 43.75em) {
      //   margin-right: -4rem;
      // }
    }
  }
  .searchIcon {
    padding: 0.7rem;
    cursor: text;
    z-index: 1;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
    border-right: none;
  }
  .searchButton {
    flex: 1 1 10%;
    color: rgba(0, 0, 0, 0.54);
    padding: 0.7rem 3rem;
    background-color: #fff;
    z-index: 1;
    border: 1px solid rgba(0, 0, 0, 0.23);
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    &:hover {
      background-color: #ccc;
    }
  }
  .clearSearch {
    cursor: text;
    height: 100%;
    z-index: 1;
  }
  // @media only screen and (max-width: 43.75em) {
  //   order: 1;
  //   flex: 0 0 100%;
  //   margin-left: -1rem;
  // }
`;

export { StyledSearch };
