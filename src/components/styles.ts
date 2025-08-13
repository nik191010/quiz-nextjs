import { SxProps, Theme } from '@mui/material';

export const headerContainerStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
};
export const quizIcon: SxProps<Theme> = {
  color: '#fff',
  fontSize: '2rem',
};

export const burgerContainer: SxProps<Theme> = {
  flexGrow: 0,
  display: { xs: 'flex', md: 'none' },
};

export const drawer: SxProps<Theme> = {
  display: { xs: 'block', md: 'none' },
};

export const drawerContainer: SxProps<Theme> = {
  textAlign: 'center',
  width: '250px',
};

export const iconButtonContainer: SxProps<Theme> = {
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
};

export const iconButton: SxProps<Theme> = {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#3498db',
  },
};

export const list: SxProps<Theme> = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem 0',
};

export const listItemButton: SxProps<Theme> = {
  background: 'transparent',
  padding: '0',
  width: 'auto',
  textAlign: 'center',
  transition: 'all 0.5s ease',
  '&:hover': {
    backgroundColor: 'transparent',
    color: '#dbbb1c',
  },
};

export const desktopMenuContainer: SxProps<Theme> = {
  flexGrow: 0,
  display: { xs: 'none', md: 'flex' },
  gap: '1.2rem',
};
export const desktopMenuLinkButton: SxProps<Theme> = {
  background: 'transparent',
  padding: '0',
  width: 'auto',
  fontSize: '1.2rem',
  color: 'white',
  display: 'block',
  transition: 'all .5s ease',
  '&:hover': {
    color: '#dbbb1c',
  },
};
