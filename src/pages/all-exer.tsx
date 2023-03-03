import React, {useState} from 'react'
import Header from '../components/Header'
import { Container, Button, Box, Grid, Typography, Stack } from '@mui/material'
import SimpleList from '../components/SimpleList'
import {OrganizedList} from '../components/OrganizedList'
import {animalWalks} from '../data/animalWalks'
import {warmups} from '../data/warmups'
import {conditioning} from '../data/conditioning'
import {mains} from '../data/mains'




export default function AllExercises() {
  const [term, setTerm] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
    // filter ALL exercises, 
    // return ones that match search term, 
    // maintain categories
      // if no exercises match in that catergory do not show the Category header
    setTerm('')
  }
  
  return (
    <Container  fixed sx={{border: '1px solid green'}}>
 

    <div style={{display: 'flex', justifyContent:'center', width: '100%', paddingTop:'20px'}}>
      <form onSubmit={handleSubmit}>
        <input type='text' style={{minWidth:'300px', width:'100%', height: '35px', padding: '5px', border: '1px solid #777', borderRadius: '5px'} }value={term} onChange={(evt) => setTerm(evt.target.value) }  placeholder='Filter Exercises'/>
      </form>
      </div>

      <Box sx={{my: 2}}>
        <Grid container item>
          <Typography variant='h4'>
            Animal Walks
          </Typography>
        </Grid>
        <OrganizedList exercises={animalWalks}/>
      </Box>

      <Box sx={{my: 2}}>
        <Grid container item>
          <Typography variant='h4'>
            Warm Ups
          </Typography>
        </Grid>
      <OrganizedList exercises={warmups}/>
      </Box>
      <Box sx={{my: 2}}>
        <Grid container item>
          <Typography variant='h4'>
            Main Exercises
          </Typography>
        </Grid>
      <OrganizedList exercises={mains}/>
      </Box>
      
      <Box sx={{my: 3}}>
        <Grid container item>
          <Typography variant='h4'>
            Conditioning
          </Typography>
        </Grid>
      <OrganizedList exercises={conditioning}/>
      </Box>
      


    </Container>
  )
}
