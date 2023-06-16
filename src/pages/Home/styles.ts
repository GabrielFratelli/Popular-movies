import styled from "styled-components";

export const MoviePage = styled.div`
  padding: var(--spacing-lg);

  .Title {
    text-align: center;
    font-weight: var(-font-weight-bold);
    color: var(--color-purple);
    text-shadow: var(--color-purple-secondary) 0.1em 0.1em 0.7em;
  }
`;

export const MovieList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  column-gap: 48px;
  row-gap: 64px;
  list-style: none;
`;

export const Movie = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;

  a {
    transition: all 0.3s;

    img {
      width: 180px;
      border-radius: 16px;
    }
  }

  a:hover {
    transform: scale(1.1);
  }

  span {
    text-align: center;
    font-size: var(--font-size-md);
    margin-top: 32px;
    font-weight: var(--font-weight-bold);
  }
`;
