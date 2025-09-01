import { boxAnswers, boxCheckbox, fullWidth } from './styles';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
import React from 'react';
import { Answer, Question } from '../../../types';
import { useQuizFormContext } from './QuizFormContext';

interface AnswerInputProps {
  answer: Answer;
  answerIndex: number;
  questionIndex: number;
  question: Question;
}

export default function AnswerInputRow({
  answer,
  answerIndex,
  questionIndex,
  question,
}: AnswerInputProps) {
  const { handleAnswerChange, markCorrect, removeAnswer } = useQuizFormContext();
  return (
    <Box key={answer.id} sx={boxAnswers}>
      <FormControl sx={fullWidth}>
        <TextField
          label={`Answer ${answerIndex + 1}`}
          value={answer.text}
          onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)}
          required
          variant="outlined"
        />
      </FormControl>
      <Box sx={boxCheckbox}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={answer.correct}
                onChange={() => markCorrect(questionIndex, answerIndex)}
              />
            }
            label="Correct"
          />
        </FormGroup>
        <Button
          onClick={() => removeAnswer(questionIndex, answerIndex)}
          variant="text"
          color="error"
          disabled={question.answers.length <= 1}
        >
          Remove answer
        </Button>
      </Box>
    </Box>
  );
}
