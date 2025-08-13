'use client';

import React from 'react';
import { Box, Button, Container, List, ListItem, Tooltip, Typography } from '@mui/material';
import Link from 'next/link';

import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

import { Quiz } from '../../types';
import useQuizStorage from '../../hooks/useQuizStorage';

export default function PlayMain() {
  const { quizzes, saveQuizProgress } = useQuizStorage();

  const deleteTheProgress = (quizId: number) => {
    const currentQuiz = quizzes.find((item: Quiz) => item.id === Number(quizId));
    if (window.confirm('Are you sure you want to delete all progress?')) {
      if (currentQuiz) {
        const updatedQuiz = {
          ...currentQuiz,
          currentStep: 0,
          correctAnswers: 0,
        };
        saveQuizProgress(updatedQuiz);
      }
    }
  };

  return (
    <Container sx={{ textAlign: 'center' }} maxWidth="md">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5rem 0' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <Typography variant="h1">Choose the Quizz</Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <Typography variant="h2">List of Quizzes</Typography>

          <List>
            {quizzes.length > 0 && quizzes.some((quiz: Quiz) => !quiz.draft) ? (
              quizzes
                .filter((quiz: Quiz) => quiz.draft === false)
                .map((quiz: Quiz) => (
                  <ListItem
                    sx={{ padding: 0, display: 'flex', alignItems: 'center', gap: '1rem' }}
                    key={quiz.id}
                  >
                    <Link href={`/play-quiz/${quiz.id}`}>
                      <Box>
                        {quiz.title.charAt(0).toUpperCase() + quiz.title.toLowerCase().slice(1)}
                      </Box>
                    </Link>
                    <Typography>Questions: {quiz.questions.length}</Typography>
                    <Tooltip title="Delete all progress">
                      <RemoveCircleIcon
                        onClick={() => deleteTheProgress(quiz.id)}
                        sx={{
                          color: (theme) => theme.palette.error.main,
                          transition: 'all .5s ease',
                          cursor: 'pointer',
                          '&:hover': {
                            opacity: '.7',
                          },
                        }}
                      />
                    </Tooltip>
                  </ListItem>
                ))
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '2rem',
                }}
              >
                <Typography variant="h3">
                  No quizzes available. Create one to start playing!
                </Typography>
                <Link href="/create-quiz"></Link>
                <Button variant="text" color="primary">
                  Create Quiz
                </Button>
              </Box>
            )}
          </List>
        </Box>
      </Box>
    </Container>
  );
}
