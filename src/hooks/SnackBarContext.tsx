'use client';

import React, { createContext, FC, useContext, useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

interface Message {
  text: string;
  autoHideDuration?: number;
  severity: 'success' | 'error' | 'info' | 'warning';
}

interface SnackBarContextValue {
  addMessage: (message: Message) => void;
  message: Message | null;
}

const SnackBarContext = createContext<SnackBarContextValue | null>(null);

export const SnackBarProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [message, setMessage] = useState<Message | null>(null);

  const addMessage = (message: Message) => {
    setMessage(message);
  };

  const handleClose = () => {
    setMessage(null);
  };

  return (
    <SnackBarContext value={{ addMessage, message }}>
      {children}
      <Snackbar
        open={!!message}
        autoHideDuration={message?.autoHideDuration}
        onClose={(_, reason) => reason !== 'clickaway' && handleClose()}
      >
        <Alert
          data-testid="quiz-success-snackbar"
          severity={message?.severity}
          onClose={handleClose}
        >
          {message?.text}
        </Alert>
      </Snackbar>
    </SnackBarContext>
  );
};

export const useSnackBar = () => {
  const context = useContext(SnackBarContext);
  if (!context) {
    throw new Error('useSnackBar must be used within a SnackBarProvider');
  }
  return context;
};
