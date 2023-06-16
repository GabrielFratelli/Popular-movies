import { styled } from "styled-components";

export const SummaryPage = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Summary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    border-radius: var(--font-size-md);
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 64px;
  max-width: 50%;

  .Title {
    margin: 32px 0px;
  }

  .movie-sinopse {
    color: var(--color-purple);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
  }

  .sinopse-paragraph {
    margin-top: var(--spacing-sm);
    font-size: var(--font-size-md);
    line-height: 1.5rem;
  }

  .release-date {
    margin: 16px 0px;
    opacity: 0.5;
  }

  .Button {
    color: white;
    font-size: var(--font-size-md);
    transition: all 0.5s;
    border-radius: 16px;
    background: var(--color-purple);
  }

  .Button:hover {
    opacity: 0.5;
  }
`;
