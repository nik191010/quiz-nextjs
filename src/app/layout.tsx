import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer';
import { Box } from '@mui/material';

export const metadata: Metadata = {
  title: 'Quiz App',
  description: 'Enjoy!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem 0',
              minHeight: '100vh',
            }}
          >
            <Navbar />
            <Box
              component="main"
              sx={{ flex: 1, display: 'flex', flexDirection: 'column', pt: '8rem' }}
            >
              {children}
            </Box>
            <Footer />
          </Box>
        </Providers>
      </body>
    </html>
  );
}
