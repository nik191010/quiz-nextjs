'use client';

import React, { useState } from 'react';
import {
  Typography,
  Button,
  Box,
  TextField,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  FormLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  FormGroup,
  SelectChangeEvent,
} from '@mui/material';

export default function Form() {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Box
      sx={{
        width: '300px',
        maxWidth: '100%',
        border: (theme) => `1px solid ${theme.palette.secondary.main}`,
        margin: '0 auto',
        borderRadius: '5px',
      }}
    >
      <Box component="form">
        <Box sx={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '1rem 0' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem 0' }}>
            <Typography variant="h2" sx={{ textAlign: 'left' }}>
              Form
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1.2rem 0' }}>
              <FormControl sx={{ width: '100%' }}>
                <TextField label="Text Input" helperText="A helpful text" variant="outlined" />
              </FormControl>
              <FormControl sx={{ width: '100%' }}>
                <TextField label="Number Input" type="number" variant="outlined" />
              </FormControl>
            </Box>
          </Box>
          <FormGroup>
            <FormLabel sx={{ textAlign: 'left', fontSize: '1.2rem' }}>Checkbox buttons</FormLabel>
            <FormControlLabel control={<Checkbox />} label="Option 1" />
            <FormControlLabel control={<Checkbox />} label="Option 2" />
          </FormGroup>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem 0' }}>
            <RadioGroup>
              <FormLabel>Radio buttons</FormLabel>
              <FormControlLabel value="option1" control={<Radio />} label="Radio 1" />
              <FormControlLabel value="option2" control={<Radio />} label="Radio 2" />
            </RadioGroup>
            <FormControl>
              <InputLabel
                sx={{
                  fontSize: '1.2rem',
                  color: '#000',
                }}
              >
                Select
              </InputLabel>
              <Select value={selectedOption} onChange={handleChange}>
                <MenuItem value="option1">Option 1</MenuItem>
                <MenuItem value="option2">Option 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Button variant="text" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
