'use client';

import QuizForm from './QuizForm';
import { QuizFormProvider } from './QuizFormContext';
import { useParams } from 'next/navigation';

export default function QuizPageWrapper() {
  const params = useParams();
  const quizId = params?.quizId as string;

  return (
    <QuizFormProvider quizId={quizId}>
      <QuizForm quizId={quizId} />
    </QuizFormProvider>
  );
}
