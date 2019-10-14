import styled from "styled-components";

const StyledVideo = styled.div`
  background-color: #f9f7f6;

  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  grid-column-gap: 0.1rem;

  .video__img {
    max-width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    z-index: 1;
  }

  .video__time {
    color: #fff;
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    background-color: red;
    font-size: 0.8rem;
    z-index: 2;
    justify-self: end;
    align-self: end;
    margin: 0.5rem;
    padding: 2px;
  }

  .video__title {
    grid-column: 2 / 3;
    margin: 0 0.5rem;
    font-size: 1rem;
    font-weight: normal;
  }
`;

export { StyledVideo };
