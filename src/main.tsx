// Libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

//OWN COMPONENTS
import Main from './Pages/Main';
import MainBar from './Components/MainBar';

import StyledThemeProvider from '@utils/theme/StyledThemeProvider';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StyledThemeProvider>
      <MainBar />
      <Main />
    </StyledThemeProvider>
  </React.StrictMode>,
);
