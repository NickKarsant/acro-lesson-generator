import React, { useState, useEffect } from "react";
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
  import {Exercise} from './Exercise'


const defaultValues = {
  name: '',
  details: '',
  category: '',
  difficulty: '',
};

const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [customExercise, setCustomExercise] = useState([]);


  const handleInputChange = (e) => {
    const {  name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormValues(defaultValues)
    // add default image to formValues

    localStorage.setItem(`custom${localStorage.length}`, JSON.stringify(formValues));
    setCustomExercise(JSON.parse(localStorage.getItem(`custom${localStorage.length -1}`)))
    setFormValues(defaultValues)
  };


  useEffect(() => {
    let custom = []
    for(let i=0; i < 5; i++){
      custom.push(JSON.parse(localStorage.getItem(`custom${i -1 }`)))
    }
    setCustomExercise(custom)
    
  }, [formValues])


  const customs = customExercise.filter((exer) => exer !== null).map((exer) => <Exercise key={exer.name} exer={exer} />)


  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent="space-around" direction="row">

        <Grid container direction='row' alignItems='center' justifyContent="space-around"  item>
          <Grid item>
          <Box sx={{ minWidth: 170 }}>
              <FormControl fullWidth>
              <InputLabel id="category">Category</InputLabel>
                <Select
                    labelId="category"
                    id="category"
                    name='category'
                    value={formValues.category}
                    label="category"
                    onChange={handleInputChange}
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
              onChange={handleInputChange}
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
              onChange={handleInputChange}
            />
          </Grid>
          <Box sx={{ minWidth: 190 }}>
              <FormControl fullWidth>
              <InputLabel  id="difficulty">Difficulty</InputLabel>
                <Select
                    labelId="difficulty"
                    id="difficulty"
                    name='difficulty'
                    value={formValues.difficulty}
                    label="difficulty"
                    // endAdornment={formValues.difficulty ? ( <FaTimes onClick={() => setFormValues({
                    //   ...formValues,
                    //   difficulty: '',
                    // })}/> ) : <FaChevronDown />}
                    onChange={handleInputChange}
                    >
                    <MenuItem value={'hard'} >Hard</MenuItem>
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
      <Box sx={{}}>
      {customExercise.filter((exer) => exer !== null).map((exer) => <Exercise key={exer.name} exer={exer} />)}
      </Box>
    </form>
  );
};
export default Form;