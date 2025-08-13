import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import Link from '@mui/material/Link';

import QuizIcon from '@mui/icons-material/Quiz';

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: '#333', py: 4 }}>
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href="/">
          <QuizIcon sx={{ color: '#fff', fontSize: '1.7rem' }} />
        </Link>
        <Typography
          sx={{ display: 'flex', gap: '0 0.5rem' }}
          variant="body1"
          color="#fff"
          align="center"
        >
          <Link href="/" color="inherit">
            <Box component="span">© QuizApp,</Box>
          </Link>
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
}
