'use client';

import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme';
import { SnackBarProvider } from '@/hooks/SnackBarContext';
import React from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SnackBarProvider>{children}</SnackBarProvider>
    </ThemeProvider>
  );
}
