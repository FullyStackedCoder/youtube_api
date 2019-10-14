import styled from "styled-components";

const StyledSingleVideo = styled.div`
  background-color: #f9f7f6;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 0.2rem;

  &:hover .video__time {
    text-decoration: none;
  }

  .video__img {
    max-width: 100%;
    grid-row: 1 / 2;
    grid-column: 1 / -1;
    z-index: 1;
  }

  .video__time {
    color: #fff;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    background-color: red;
    font-size: 0.8rem;
    z-index: 2;
    justify-self: end;
    align-self: end;
    margin: 0.5rem;
    padding: 2px;
  }

  .video__title {
    grid-column: 1 / -1;
    margin: 0.5rem;
    font-size: 1rem;
    font-weight: normal;
  }
`;

export { StyledSingleVideo };
