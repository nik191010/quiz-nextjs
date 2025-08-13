'use client';

import { Container, Typography, Button, Box } from '@mui/material';
import React from 'react';
import Link from 'next/link';
import Form from '../../components/Form';

export default function ComponentShowCasePage() {
  return (
    <>
      <Container maxWidth="md">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '2rem 0',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '2rem 0',
              width: '100%',
            }}
          >
            <Box
              sx={{
                xs: 12,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                textAlign: 'left',
                width: '400px',
                maxWidth: '100%',
                margin: '0 auto 1rem',
                gap: '1.2rem',
              }}
            >
              <Typography variant="h1">Heading 1</Typography>
              <Typography variant="h2">Heading 2</Typography>
              <Typography variant="h3">Heading 3</Typography>
              <Typography variant="h4">Heading 4</Typography>
              <Typography variant="h5">Heading 5</Typography>
              <Typography variant="h6">Heading 6</Typography>
              <Typography variant="body1">Primary body text</Typography>
              <Typography variant="body2">Secondary body text</Typography>
              <Typography variant="caption">Tertiary body text</Typography>
            </Box>
            <Box
              sx={{
                xs: 12,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.2rem',
              }}
            >
              <Button variant="text" color="primary">
                Primary button
              </Button>
              <Button variant="text" color="secondary">
                Secondary button
              </Button>
              <Button variant="text" color="error">
                Danger Button
              </Button>
            </Box>
            <Box
              sx={{
                xs: 12,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '1.2rem',
              }}
            >
              <Button variant="outlined" color="primary">
                Primary Outline
              </Button>
              <Button variant="outlined" color="secondary">
                Secondary Outline
              </Button>
              <Button variant="outlined" color="error">
                Error Outline
              </Button>
            </Box>
          </Box>

          <Form />

          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Link href="/">
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: 'transparent',
                  border: (theme) => `1px solid ${theme.palette.primary.main}`,
                  color: (theme) => theme.palette.primary.main,
                  padding: '7px 0',
                  textTransform: 'none',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  width: '220px',
                  maxWidth: '100%',
                  transition: 'all .5s ease',
                  '&:hover': {
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: '#fff',
                  },
                }}
              >
                Home
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </>
  );
}
