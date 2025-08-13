'use client';

import React from 'react';
import { useParams } from 'next/navigation';

import QuizForm from './[quizId]/QuizForm';
import { QuizFormProvider } from './[quizId]/QuizFormContext';

export default function CreateQuizPage() {
  const { quizId } = useParams<{ quizId: string }>();

  return (
    <QuizFormProvider quizId={quizId}>
      <QuizForm quizId={quizId} />
    </QuizFormProvider>
  );
}
