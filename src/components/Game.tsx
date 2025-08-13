import { Box, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import theme from '../theme';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import CloseIcon from '@mui/icons-material/Close';

interface Answer {
  id: number;
  text: string;
  correct: boolean;
}

interface QuizQuestion {
  id: number;
  text: string;
  answers: Answer[];
}

interface GameI {
  question?: QuizQuestion;
  percentageBar?: number;
  onClickVariant: (index: number) => void;
  correct: number;
  currentQuizQuestLength: number | undefined;
  restartTheQuiz: () => void;
  getBack: () => void;
}

export default function Game({
  question,
  onClickVariant,
  percentageBar,
  correct,
  currentQuizQuestLength,
  restartTheQuiz,
  getBack,
}: GameI) {
  return (
    <Box
      sx={{
        color: '#fff',
        width: '500px',
        position: 'relative',
        maxWidth: '100%',
        borderRadius: '30px',
        padding: '60px 40px',
        background: theme.palette.primary.main,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '.5rem',
          position: 'absolute',
          top: '10px',
          right: '20px',
        }}
      >
        <RestartAltIcon
          onClick={restartTheQuiz}
          sx={{
            height: '25px',
            width: '25px',
            color: (theme) => theme.palette.secondary.main,
            transition: 'all .5s ease',
            cursor: 'pointer',
            '&:hover': {
              opacity: '.5',
            },
          }}
        />
        <CloseIcon
          onClick={getBack}
          sx={{
            height: '29px',
            width: '29px',
            color: (theme) => theme.palette.error.main,
            transition: 'all .5s ease',
            cursor: 'pointer',
            '&:hover': {
              opacity: '.5',
            },
          }}
        />
      </Box>
      <Typography variant="h4" sx={{ textAlign: 'center' }}>
        {`You answered ${correct} out of ${currentQuizQuestLength} questions correctly`}
      </Typography>
      <Box
        sx={{
          height: '10px',
          borderRadius: '30px',
          backgroundColor: 'rgb(232, 232, 232)',
        }}
      >
        <Box
          sx={{
            height: '100%',
            borderRadius: '30px',
            width: `${percentageBar}%`,
            transition: ' all 0.3s ease-in-out',
            background:
              'linear-gradient(90deg, rgba(18, 231, 48, 1) 0%, rgba(0, 212, 255, 1) 100%)',
          }}
        ></Box>
      </Box>
      <Typography variant="h2" sx={{ textAlign: 'center' }}>
        {question?.text}
      </Typography>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {question?.answers.map((item, index) => (
          <ListItem
            sx={{
              cursor: 'pointer',
              border: '1px solid rgba(255,255,255,.4)',
              borderRadius: '15px',
              transition: 'all ease-in 0.3s',
              '&:hover': {
                borderColor: 'rgba(255,255,255,.9)',
              },
            }}
            key={index}
            onClick={() => onClickVariant(index)}
          >
            {item.text}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
