import React from 'react'
import Header from '../components/Header'
import { Container, Button, Box, Grid, Typography, Stack } from '@mui/material'
import SimpleList from '../components/SimpleList'
import {OrganizedList} from '../components/OrganizedList'
import {animalWalks} from '../data/animalWalks'
import {warmups} from '../data/warmups'
import {conditioning} from '../data/conditioning'




export default function BeginnerCurriculum() {
  
  return (
    <Container  fixed sx={{border: '1px solid green'}}>

    
      <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        sx={{m:1}}
      >
        <Button variant="contained" sx={{backgroundColor: 'red'}} size="large">
          Create New Curriculum
        </Button>
      </Box>

      <Box 
        display="flex" 
        alignItems="center"
        justifyContent="center"
        sx={{m:1}}
      >
        <Button variant="contained" sx={{backgroundColor: 'teal'}} size="large" href='/all-exer'>
          Show All Exercises
        </Button>
      </Box>

      <Box sx={{my: 2}}>
        <Grid container item>
          <Typography variant='h4'>
            Previous Curriculums
          </Typography>
        </Grid>
        {/* stuff here */}
      </Box>


    </Container>
  )
}
