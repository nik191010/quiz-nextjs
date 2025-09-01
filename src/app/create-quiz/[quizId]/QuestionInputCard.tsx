import { boxQuestion, fullWidth } from './styles';
import { Box, Button, FormControl, TextField } from '@mui/material';
import AnswerInputRow from '../[quizId]/AnswerInputRow';
import React from 'react';
import { Question } from '../../../types';
import { useQuizFormContext } from './QuizFormContext';

interface QuestionInputProps {
  questionIndex: number;
  question: Question;
}

export default function QuestionInputCard({ questionIndex, question }: QuestionInputProps) {
  const { questions, removeQuestion, handleQuestionChange, addAnswer } = useQuizFormContext();
  return (
    <Box key={question.id} sx={boxQuestion}>
      <FormControl sx={fullWidth}>
        <TextField
          label="Question"
          value={question.text}
          onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
          variant="outlined"
          required
        />
      </FormControl>

      {question.answers.map((answer, answerIndex) => (
        <AnswerInputRow
          key={answerIndex}
          answer={answer}
          answerIndex={answerIndex}
          questionIndex={questionIndex}
          question={question}
        />
      ))}

      <Button
        onClick={() => addAnswer(questionIndex)}
        sx={fullWidth}
        variant="outlined"
        color="secondary"
        disabled={question.answers.length >= 4}
      >
        Add Answer
      </Button>
      <Button
        onClick={() => removeQuestion(questionIndex)}
        sx={fullWidth}
        variant="text"
        color="error"
        disabled={questions.length <= 1}
      >
        Remove Question
      </Button>
    </Box>
  );
}
