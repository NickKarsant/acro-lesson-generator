import React, {useState} from 'react';
import Header from '../components/Header'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { Container, Button,  Box, Grid, Typography, Stack, Divider } from '@mui/material'
import {OrganizedList} from '../components/OrganizedList'
import { Inter } from '@next/font/google'
import {randomizedCurriculum} from '../data/dataRetrieval'
import { useTheme } from '@emotion/react';



export default function Home() {
  const {push} = useRouter()
  const [randomized, setRandomized] = useState({})

  const randomCurriculum = () =>{
    setRandomized(randomizedCurriculum)
  }

  const saveRandomToLocalStorage = () =>{ localStorage.setItem('randomCurriculum', JSON.stringify(randomized));
  }

  return (
    <Container>
      <Box    
        sx={{my: 2}}>
        <Grid container item display="flex" 
        alignItems="center"
        justifyContent="center" >
          <Typography variant='h4'>
            Previous Lessons
          </Typography>
        </Grid>

        <Stack direction='row'  display='flex' justifyContent="space-around"
  alignItems="center"
  spacing={2}  divider={<Divider orientation="vertical" flexItem />}>
        <Button variant="contained" sx={{backgroundColor: 'teal'}} size="medium" onClick={() => push('./create-curriculum')}>
              Create Custom Lesson
            </Button>

            <Button onClick={randomCurriculum} variant="contained" sx={{backgroundColor: 'red'}} size="medium">
              Create Randomized Lesson
            </Button>
        </Stack>

        {/* <Grid container item display="flex" 
        alignItems="center"
        justifyContent="space-around"spacing={2} >
          <Grid item>
            <Button variant="contained" sx={{backgroundColor: 'teal'}} size="medium" onClick={() => push('./create-curriculum')}>
              Create Custom Lesson
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={randomCurriculum} variant="contained" sx={{backgroundColor: 'red'}} size="medium">
              Create Randomized Lesson
            </Button>
          </Grid>
        </Grid> */}
      </Box>

      {randomized.animalWalks && (
        <>
      <Box sx={{my: 2, p:'10px',borderRadius:'10px',   boxShadow: 'inset 0px 5px 10px 5px red'}}>
        <Grid container item>
          <Typography variant='h4'>
            Animal Walks
          </Typography>
        </Grid>
        <OrganizedList exercises={randomized.animalWalks} />
        <Grid container item>
          <Typography variant='h4'>
           Warm Ups
          </Typography>
        </Grid>
        <OrganizedList exercises={randomized.warmups} />
        <Grid container item>
          <Typography variant='h4'>
            Main Exercsies
          </Typography>
        </Grid>
        <OrganizedList exercises={randomized.mains} />
        <Grid container item>
          <Typography variant='h4'>
            Conditioning
          </Typography>
        </Grid>
        <OrganizedList exercises={randomized.conditioning} />
      </Box>
      
      <Grid container item display="flex" 
      alignItems="center"
      justifyContent="space-around"spacing={2} >
        <Grid item>
          <Button variant="contained" sx={{backgroundColor: 'teal'}} size="medium" onClick={saveRandomToLocalStorage}>
            Save Current Lesson
          </Button>
        </Grid>
      </Grid>

        </>
      )}
      


 <div>
  if no Previous curriculums saved, provide button to create a selected one or generate a random one
 </div>
 <div>
 otherwise
 </div>
 <div>
  Show last 5 or 10 created curriculums
 </div>
    </Container>
    
  )
}
