import React, {useState, useEffect} from 'react';
import Header from '../components/Header'
import Image from 'next/image'
import {useRouter} from 'next/router'
import { Container, Button,  Box, Grid, Typography, Stack, Divider } from '@mui/material'
import {OrganizedList} from '../components/OrganizedList'
import { Inter } from '@next/font/google'
import {randomizedCurriculum} from '../data/dataRetrieval'
import { useTheme } from '@emotion/react';
import { PreviousCurriculum } from '@/components/PreviousCurriculum';



export default function Home() {
  const {push} = useRouter()
  const [randomized, setRandomized] = useState({})
  const [savedCurriculum, setSavedCurriculum] = useState([])
  const [previousCurrs, setPreviousCurrs] = useState([])
  

  const randomCurriculum = () =>{
    setRandomized(randomizedCurriculum)
  }

  const saveRandomToLocalStorage = () =>{ 
    localStorage.setItem(`random${localStorage.length}`, JSON.stringify(randomized));
    setSavedCurriculum(JSON.parse(localStorage.getItem(`random${localStorage.length -1}`)))
    setRandomized({})
  }

  useEffect(() => {
    let previous = []
    for(let i=0; i < 10; i++){
      previous.push(JSON.parse(localStorage.getItem(`random${i -1 }`)))
    }
    setPreviousCurrs(previous)
    
  }, [randomized])


  

  return (
    <Container>
        <Grid sx={{my:2}} container item display="flex" 
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

      {randomized.animalWalks && (
        <>
      <Box sx={{my: 2, p:'10px', borderRadius:'10px', boxShadow: 'inset 0px 5px 10px 5px red'}}>
        <Grid sx={{mt:2}} container item>
          <Typography variant='h4'>
            Animal Walks
          </Typography>
        </Grid>
        <OrganizedList exercises={randomized.animalWalks} />
        <Grid sx={{mt:2}} container item>
          <Typography variant='h4'>
            Warm Ups
          </Typography>
        </Grid>
        <OrganizedList exercises={randomized.warmups} />
        <Grid sx={{mt:2}} container item>
          <Typography variant='h4'>
            Main Exercsies
          </Typography>
        </Grid>
        <OrganizedList exercises={randomized.mains} />
        <Grid sx={{mt:2}} container item>
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
          <Button variant="contained" sx={{backgroundColor: 'red'}} size="medium" onClick={saveRandomToLocalStorage}>
            Save Randomized Lesson
          </Button>
        </Grid>
      </Grid>
        </>
      )}

    <Grid container direction="column" sx={{my:2}} justifyContent='center' display='flex' spacing={1}>

      {previousCurrs.length && (
        previousCurrs.map((curr, idx) => {
          if (curr !== null){
            return (
              <Grid item key={idx}>
                <PreviousCurriculum  curr={curr} />
              </Grid>
            )
          }
        })
        )}
    </Grid>
    </Container>
    
  )
}
