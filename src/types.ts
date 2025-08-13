export interface Answer {
  correct: boolean;
  id: number;
  text: string;
}
export interface Question {
  id: number;
  text: string;
  answers: Answer[];
}

export interface Quiz {
  id: number;
  title: string;
  draft: boolean;
  questions: Question[];
  currentStep?: number; // progress tracking current question index
  correctAnswers?: number;
}
