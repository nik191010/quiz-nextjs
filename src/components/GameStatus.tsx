'use client';

import React from 'react';
import { Box, Button, Typography } from '@mui/material';

interface GameStatusI {
  correctMessage: boolean;
  nextQuestion: () => void;
}

const messagesCorrect = [
  { text: 'Well Done!', img: '/assets/gifs/correct-1.gif' },
  { text: "You're doing great mate!", img: '/assets/gifs/correct-2.gif' },
];
const messagesWrong = [
  { text: 'Could be better...', img: '/assets/gifs/wrong-1.gif' },
  { text: 'Try to focus a bit more!', img: '/assets/gifs/wrong-2.gif' },
];

export default function GameStatus({ correctMessage, nextQuestion }: GameStatusI) {
  const random = Math.round(Math.random());

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
      }}
    >
      {correctMessage === true ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Typography variant="h2" sx={{ textAlign: 'left' }}>
            {messagesCorrect[random].text}
          </Typography>
          <Box
            component="img"
            src={messagesCorrect[random].img}
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
      ) : (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '2rem',
          }}
        >
          <Typography variant="h2" sx={{ textAlign: 'left' }}>
            {messagesWrong[random].text}
          </Typography>
          <Box
            component="img"
            src={messagesWrong[random].img}
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
      )}
      <Button variant="text" color="primary" onClick={nextQuestion}>
        Next Question
      </Button>
    </Box>
  );
}
