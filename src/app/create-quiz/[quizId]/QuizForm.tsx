'use client';

import React from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@mui/material';

import { boxGrid, container, form, formControl, fullWidth, newQuestion } from './styles';
import { useQuizFormContext } from './QuizFormContext';
import QuestionInputCard from './QuestionInputCard';

interface QuizFormProps {
  quizId?: string;
}

export default function QuizForm({ quizId }: QuizFormProps) {
  const {
    removeQuiz,
    handleSubmit,
    addQuestion,
    questions,
    handleTitleChange,
    title,
    draft,
    handleDraftChange,
  } = useQuizFormContext();
  return (
    <Container sx={container} maxWidth="md">
      <Box sx={form} component="form" onSubmit={handleSubmit}>
        <Typography variant="h1">{`Edit Quiz${draft ? ' - Draft' : ''}`}</Typography>

        <FormControl sx={formControl}>
          <TextField
            id="quiz-title"
            label="Title"
            value={title}
            onChange={handleTitleChange}
            variant="outlined"
            required
          />
        </FormControl>

        <Typography variant="h2">Questions</Typography>
        <Box sx={boxGrid}>
          {questions.map((question, questionIndex) => (
            <QuestionInputCard
              key={questionIndex}
              questionIndex={questionIndex}
              question={question}
            />
          ))}
          <Box sx={newQuestion}>
            <Button sx={fullWidth} onClick={addQuestion} variant="outlined" color="primary">
              Add question
            </Button>
          </Box>
        </Box>

        <Box>
          <FormGroup>
            <FormControlLabel
              control={<Checkbox checked={draft} onChange={handleDraftChange} />}
              label="Save as draft"
            />
          </FormGroup>
        </Box>

        <Button type="submit" variant="text" color="primary">
          {quizId ? 'Update Quiz' : 'Submit'}
        </Button>
        {quizId && (
          <Button onClick={() => removeQuiz(parseInt(quizId))} variant="text" color="error">
            Remove Quiz
          </Button>
        )}
      </Box>
    </Container>
  );
}
