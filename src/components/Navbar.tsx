'use client';

import {
  AppBar,
  Box,
  Button,
  Drawer,
  Container,
  IconButton,
  Toolbar,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';
import Link from 'next/link';

import QuizIcon from '@mui/icons-material/Quiz';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import pages from '../config/pages';

import {
  burgerContainer,
  desktopMenuContainer,
  desktopMenuLinkButton,
  drawer,
  drawerContainer,
  headerContainerStyles,
  iconButton,
  iconButtonContainer,
  list,
  listItemButton,
  quizIcon,
} from './styles';

export default function Footer() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={headerContainerStyles}>
            <Link href="/">
              <QuizIcon sx={quizIcon} />
            </Link>
          </Box>
          <Box sx={burgerContainer}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle} sx={drawer}>
              <Box sx={drawerContainer}>
                <Box sx={iconButtonContainer}>
                  <IconButton onClick={handleDrawerToggle} sx={iconButton}>
                    <CloseIcon />
                  </IconButton>
                </Box>
                <List sx={list}>
                  {pages.map((page) => (
                    <ListItem key={page.name} disablePadding>
                      <Link href={page.link}>
                        <ListItemButton sx={listItemButton}>
                          <ListItemText
                            primary={<Typography variant="body2">{page.name}</Typography>}
                          />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Drawer>
          </Box>
          <Box sx={desktopMenuContainer}>
            {pages.map((page) => (
              <Link key={page.name} href={page.link}>
                <Button key={page.name} sx={desktopMenuLinkButton}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
