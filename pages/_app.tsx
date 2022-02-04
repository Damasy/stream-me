import App from 'next/app';
import React, { useEffect } from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';

import { themeDark, themeLight } from 'lib/theme';

export default function MyApp ({Component, pageProps}) {
  
  return (
    <ThemeProvider theme={false ? themeDark : themeLight}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}