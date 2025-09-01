import '@testing-library/jest-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import { QuizFormProvider } from '@/app/create-quiz/[quizId]/QuizFormContext';
import QuizForm from '@/app/create-quiz/[quizId]/QuizForm';
import { SnackBarProvider } from '@/hooks/SnackBarContext';

const mockEnqueue = jest.fn();

jest.mock('notistack', () => ({
  ...jest.requireActual('notistack'),
  useSnackbar: () => {
    return {
      enqueueSnackbar: mockEnqueue,
    };
  },
}));

const renderWithProviders = () =>
  render(
    <SnackBarProvider>
      <QuizFormProvider quizId="1">
        <QuizForm />
      </QuizFormProvider>
    </SnackBarProvider>,
  );

describe('CreateQuizForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders title input and add-question button', () => {
    renderWithProviders();
    expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/add question/i)).toBeInTheDocument();
  });

  it('allows typing a title', () => {
    renderWithProviders();

    fireEvent.change(screen.getByLabelText(/title/i), {
      target: { value: 'My Quiz Title' },
    });

    fireEvent.change(screen.getByLabelText(/question/i), {
      target: { value: '2+2?' },
    });
    fireEvent.change(screen.getByLabelText(/answer/i), {
      target: { value: '4' },
    });

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
  });
});
