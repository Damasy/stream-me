import App from 'next/app';
import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import { themeDark, themeLight } from 'lib/theme';

export default function MyApp ({Component, pageProps}) {
  useEffect(() => {
    // Remove the server side injected css
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <ThemeProvider theme={false ? themeDark : themeLight}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}