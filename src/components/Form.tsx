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
  import {OrganizedList} from '../components/OrganizedList'
  import acroDefault from '../../public/defaultImages/acroDefault.jpeg'


const defaultValues = {
  name: '',
  details: '',
  category: '',
  difficulty: '',
};

const Form = () => {
  const [formValues, setFormValues] = useState(defaultValues);
  const [customExercises, setCustomExercises] = useState([]);
  const [submitted, setSubmitted] = useState(false);


  const handleInputChange = (e) => {
    const {  name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    formValues['img'] = acroDefault
    localStorage.setItem(`custom${localStorage.length}`, JSON.stringify(formValues));
    setFormValues(defaultValues)
    setSubmitted(true)
  };


  useEffect(() => {
    let custom = []
    for(let i=0; i < 20; i++){
      custom.push(JSON.parse(localStorage.getItem(`custom${i -1}`)))
    }
    setCustomExercises(custom.filter((exer) => exer !== null))
  }, [submitted])
  



  return (
    <form onSubmit={handleSubmit}>
      <Grid container alignItems="center" justifyContent="space-around" direction="row">

        <Grid container direction='row' alignItems='center' justifyContent="space-around"  item>
          <Grid item>
              <FormControl  sx={{ minWidth: 170 }} fullWidth>
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
        <OrganizedList exercises={customExercises}/>
      
      </Box>
    </form>
  );
};
export default Form;