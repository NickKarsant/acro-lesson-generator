import React, { useState } from "react";
import { Grid,
  TextField,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Select,
  MenuItem,
  Slider,
  Box,
  Button, 
  InputLabel,
  TextareaAutosize} from '@mui/material'
  import {FaChevronDown, FaTimes} from 'react-icons/fa'


const defaultValues = {
  name: '',
  details: '',
  category: '',
  difficulty: '',
};

const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');

  
  const handleCategoryChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      category: value,
    });
  };
  const handleDifficultyChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      difficulty: value,
    });
  };

  const handleNameChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      name: value,
    });
  };
  const handleDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      details: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues(defaultValues)
    // add default image to formValues
    // save to localSotrage 
    console.log(formValues);
  };


  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent="space-around" direction="row">

        <Grid container direction='row' alignItems='center' justifyContent="space-around"  item>
          <Grid item>
          <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                    name='category'
                    value={formValues.category}
                    label="category"
                    onChange={handleCategoryChange}
                    >
                    <MenuItem value={'Warm Up'}>Warm Up</MenuItem>
                    <MenuItem value={'Main'}>Main Exercise</MenuItem>
                    <MenuItem value={'Conditioning'}>Conditioning</MenuItem>
                  </Select>
              </FormControl>
            </Box>
            </Grid>

          <Grid item>
            <TextField
              id="name-input"
              name="name"
              label="Name"
              type="text"
              value={formValues.name}
              onChange={handleNameChange}
            />
          </Grid>
        </Grid>

        <Grid container direction='row' alignItems='center' justifyContent="space-around" sx={{mt: 2}}   item>
          <Grid item>
            <TextareaAutosize
              id="details-input"
              placeholder="Details"
              type="text"
              name='details'
              minRows={5}
              value={formValues.details}
              onChange={handleDetailsChange}
            />
          </Grid>
          <Box sx={{ minWidth: 160 }}>
              <FormControl fullWidth>
              <InputLabel  id="difficulty">Difficulty</InputLabel>
                <Select
                    labelId="difficulty"
                    id="difficulty"
                    value={formValues.difficulty}
                    label="Difficulty"
                    endAdornment={formValues.difficulty ? <FaTimes onClick={() => setFormValues({
                      ...formValues,
                      difficulty: '',
                    })}/> : <FaChevronDown />}
                    onChange={handleDifficultyChange}
                    >
                    <MenuItem value={'warmup'} >Hard</MenuItem>
                  </Select>
              </FormControl>
            </Box>
        </Grid>
        <Grid item sx={{p:2}}>
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};
export default Form;