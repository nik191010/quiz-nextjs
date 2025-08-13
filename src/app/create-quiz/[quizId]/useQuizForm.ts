import { Question, Quiz } from '../../../types';
import useQuizStorage from '../../../hooks/useQuizStorage';
import React, { useState } from 'react';

const defaultQuestion = {
  id: Date.now(),
  text: '',
  answers: [{ id: 1, text: '', correct: true }],
};

const createEmptyQuiz = (id: number): Quiz => ({
  id,
  title: '',
  draft: true,
  questions: [defaultQuestion],
});
const getQuizOrCreateNew = (quizId: number, quizzes: Array<Quiz>) => {
  const quiz = quizzes.find((quiz) => quiz.id === quizId);
  return quiz ?? createEmptyQuiz(quizId);
};
export const useQuizForm = (quizId: number) => {
  const { quizzes, removeQuiz, addOrUpdateQuiz } = useQuizStorage();
  const quiz = getQuizOrCreateNew(quizId, quizzes);

  const [draft, setDraft] = useState<boolean>(quiz.draft);

  const [questions, setQuestions] = useState<Question[]>(quiz.questions);
  const [title, setTitle] = useState<string>(quiz.title);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDraftChange = () => {
    setDraft((prevDraft) => !prevDraft);
  };

  const handleQuestionChange = (questionIndex: number, value: string) => {
    setQuestions((prev) =>
      prev.map((question, i) => {
        if (i === questionIndex) {
          return { ...question, text: value };
        } else {
          return question;
        }
      }),
    );
  };

  const handleAnswerChange = (questionIndex: number, answerIndex: number, value: string) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex) {
          return {
            ...question,
            answers: question.answers.map((answer, aIndex) =>
              aIndex === answerIndex ? { ...answer, text: value } : answer,
            ),
          };
        } else {
          return question;
        }
      }),
    );
  };

  const addAnswer = (questionIndex: number) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex && question.answers.length < 4) {
          return {
            ...question,
            answers: [...question.answers, { id: Date.now(), text: '', correct: false }],
          };
        } else {
          return question;
        }
      }),
    );
  };

  const removeAnswer = (questionIndex: number, answerIndex: number) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex) {
          return {
            ...question,
            answers: question.answers.filter((_, j) => j !== answerIndex),
          };
        } else {
          return question;
        }
      }),
    );
  };

  const markCorrect = (questionIndex: number, answerIndex: number) => {
    setQuestions((prev) =>
      prev.map((question, index) => {
        if (index === questionIndex) {
          return {
            ...question,
            answers: question.answers.map((answer, aIndex) => ({
              ...answer,
              correct: aIndex === answerIndex,
            })),
          };
        } else {
          return question;
        }
      }),
    );
  };

  const addQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      { id: Date.now(), text: '', draft: false, answers: [{ id: 1, text: '', correct: true }] },
    ]);
  };

  const removeQuestion = (qIndex: number) => {
    if (questions.length > 1) {
      setQuestions((prev) => prev.filter((_, i) => i !== qIndex));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Please enter a quiz title');
      return;
    }

    addOrUpdateQuiz({
      id: quiz.id,
      title,
      draft,
      questions: questions.map(({ id, text, answers }) => ({ id, text, answers })),
    });
  };

  return {
    removeQuiz,
    quiz,
    handleSubmit,
    questions,
    addQuestion,
    handleTitleChange,
    title,
    handleAnswerChange,
    addAnswer,
    draft,
    handleDraftChange,
    removeAnswer,
    removeQuestion,
    markCorrect,
    handleQuestionChange,
  };
};
