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

    // Font weight
    --font-weight-regular: 400;
    --font-weight-bold: 700;
    --font-weight-x-bold: 800;

    // Line height
    --line-height-default: 130%;
    --line-height-bigger: 160%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Inter', sans-serif;
  }

  body {
    min-height: 100vh;

    background-color: var(--color-background);

    font-size: 1rem;
    line-height: var(--line-height-default);
  }

  input {
    box-shadow: none;
    outline: none;

    color: var(--color-base-input);

    font-size: 0.875rem;
  }

  button {
    box-shadow: none;
    outline: none;

    cursor: pointer;
  }
`;
