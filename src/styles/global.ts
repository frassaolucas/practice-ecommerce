import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    // Colors
    --color-yellow-light: #F1E9C9;
    --color-yellow: #DBAC2C;
    --color-yellow-dark: #C47F17;

    --color-purple-light: #EBE5F9;
    --color-purple: #8047F8;
    --color-purple-dark: #4B2995;

    --color-error: #FF3333;

    --color-base-label: #8D8686;
    --color-base-text: #574F4D;
    --color-base-subtitle: #403937;
    --color-base-title: #272221;

    --color-base-card: #F3F2F2;
    --color-base-input: #EDEDED;
    --color-base-button: #E6E5E5;
    --color-base-hover: #D7D5D5;
    
    --color-white: #FFFFFF;
    --color-background: #FAFAFA;

    // Font family
    --font-family-text: 'Roboto', sans-serif;

    // Font weight
    --font-weight-regular: 400;
    --font-weight-bold: 700;
    --font-weight-x-bold: 800;

    // Line height
    --line-height-default: 1.3;
    --line-height-bigger: 1.6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: var(--font-family-text);
    line-height: var(--line-height-default);
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: var(--color-background);
    color: var(--color-base-text);

    font-size: 1rem;
  }

  h1, h2, h3, h4, h5 {
    font-family: var(--font-family-text);
  }

  input {
    box-shadow: none;
    outline: none;
  }

  button {
    box-shadow: none;
    outline: none;

    cursor: pointer;
  }

  img {
    max-width: 100%;
  }
`;
