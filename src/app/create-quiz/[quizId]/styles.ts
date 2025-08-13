import { SxProps, Theme } from '@mui/material';

export const container: SxProps<Theme> = {
  textAlign: 'center',
};

export const form: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem 0',
};

export const formControl: SxProps<Theme> = {
  width: '300px',
  maxWidth: '100%',
};

export const boxGrid: SxProps<Theme> = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2rem',
};

export const boxQuestion: SxProps<Theme> = {
  gridColumn: { md: 'span 1', xs: 'span 2' },
  width: '100%',
  height: '100%',
  minHeight: '350px',
  borderRadius: 2,
  boxShadow: 1,
  backgroundColor: 'white',
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

export const fullWidth: SxProps<Theme> = {
  width: '100%',
};

export const boxAnswers: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '2rem',
};

export const boxCheckbox: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: { sm: 'row', xs: 'column' },
  gap: { sm: '0', xs: '1rem' },
};

export const newQuestion: SxProps<Theme> = {
  gridColumn: { md: 'span 1', xs: 'span 2' },
  width: '100%',
  height: '100%',
  minHeight: '350px',
  borderRadius: 2,
  boxShadow: 1,
  backgroundColor: 'white',
  p: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
