import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;

   background: var(--color-dark);
   color: var(--color-white);



  }



*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0px;
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body::-webkit-scrollbar {
  width: 12px;               /* largura de toda a barra de rolagem */
}

body::-webkit-scrollbar-track {
  background: #1B1E23;        /* cor da área de rastreamento */
}

body::-webkit-scrollbar-thumb {
  background-color: var(--color-purple);    /* cor do polegar de rolagem */
  border-radius: 20px;       /* arredondamento do polegar de rolagem */
}

#root {
  min-width: var(--full-width);
  min-height: 100vh;
  @supports (-webkit-overflow-scrolling: touch) {
    /* mobile viewport bug fix */
    min-height: -webkit-fill-available;
  }
}

:root {
  --full-width: calc(100vw - 20px);

  --color-white: #fff;
  --color-dark: #000;
  --color-dark-secondary: #1B1E23;
  --color-purple:  #6654da;
  --color-purple-secondary: #5848c2;

  --spacing-sm: 8px;
  --spacing-md: 14px;
  --spacing-lg: 20px;
  --spacing-xl: 26px;

  --font-size-sm: 0.9rem;
  --font-size-md: 1.1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;

  --font-weight-normal: 400;
  --font-weight-bold: 700;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0px;
  padding: 0px;
}

a,
b,
u {
  color: inherit;
  font-size: inherit;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
}

form {
  display: contents;
}
`;
