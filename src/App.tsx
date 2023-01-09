import { BrowserRouter } from 'react-router-dom';

import { Router } from '@/Router';

import { GlobalStyles } from '@/styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </>
  );
}

export default App;
