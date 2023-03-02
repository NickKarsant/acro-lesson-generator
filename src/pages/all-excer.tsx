import React from 'react'
import Header from '../components/Header'
import { Container, Button, Box, Grid, Typography, Stack } from '@mui/material'
import SimpleList from '../components/SimpleList'
import {OrganizedList} from '../components/OrganizedList'
import {animalWalks} from '../data/animalWalks'
import {warmups} from '../data/warmups'
import {conditioning} from '../data/conditioning'




export default function AllExercises() {
  
  return (
    <Container  fixed sx={{border: '1px solid green'}}>
 
      
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
