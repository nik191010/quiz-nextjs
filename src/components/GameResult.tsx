'use client';

import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import theme from '../theme';

interface GameResultI {
  correct: number;
  currentQuizQuestLength: number;
  percentageResult: number | undefined;
  restartTheQuiz: () => void;
  getBack: () => void;
}

const messagesStatus = [
  { text: 'You won!', img: '/assets/gifs/victory.gif' },
  { text: 'Not bad', img: '/assets/gifs/ok.gif' },
  { text: "You'll win next time", img: '/assets/gifs/game-over.gif' },
];

export default function GameResult({
  correct,
  currentQuizQuestLength,
  percentageResult,
  restartTheQuiz,
  getBack,
}: GameResultI) {
  let checkStatus = 0;

  if (percentageResult !== undefined) {
    if (percentageResult > 50) {
      checkStatus = 0;
    } else if (percentageResult > 25 && percentageResult < 50) {
      checkStatus = 1;
    } else {
      checkStatus = 2;
    }
  }

  return (
    <Box
      sx={{
        color: '#fff',
        width: '500px',
        maxWidth: '100%',
        borderRadius: '30px',
        padding: '40px',
        background: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
        <Typography variant="h2" sx={{ textAlign: 'left' }}>
          {messagesStatus[checkStatus].text}
        </Typography>
        <Box
          component="img"
          src={messagesStatus[checkStatus].img}
          alt="Success animation"
          sx={{
            width: '100%',
            maxWidth: '300px',
            height: '200px',
            borderRadius: '12px',
            objectFit: 'cover',
          }}
        />
      </Box>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        {`You answered ${correct} out of ${currentQuizQuestLength} questions correctly (${percentageResult}%)`}
      </Typography>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5rem',
        }}
      >
        <Button onClick={restartTheQuiz} variant="text" color="primary">
          Restart the Quiz
        </Button>
        <Button onClick={getBack} variant="text" color="secondary">
          Home
        </Button>
      </Box>
    </Box>
  );
}
