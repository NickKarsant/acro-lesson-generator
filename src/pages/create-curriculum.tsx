import React, {useState} from 'react';
import {ImageList,Container, 
ImageListItem,
ImageListItemBar,
ListSubheader,
Box,
Grid,
Typography,
Stack, 
IconButton} from '@mui/material';
import {useRouter} from 'next/router'
import { ExerciseChip } from "../components/Exercise";
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import { useTheme } from '@emotion/react';
import {OrganizedList, } from '../components/OrganizedList'
import {animalWalks} from '../data/animalWalks'
import {warmups} from '../data/warmups'
import {conditioning} from '../data/conditioning'
import {mains} from '../data/mains'



export default function CreateCurriculum() {
  const {push} = useRouter()
  
  return (
    <Container  fixed sx={{border: '1px solid blue'}}>
      <Grid container item display="flex" 
        alignItems="center"
        justifyContent="center" >
          <Typography variant='h4'>
            Create Custom Lesson
          </Typography>
        </Grid>
      <Box sx={{my: 2}}>
        
          <Grid container item>
            <Typography variant='h4'>
              Animal Walks
            </Typography>
          </Grid>
          <Typography sx={{pl:0.5}} variant='caption'>
            Pick four
          </Typography>
          <Box sx={{ mb: 2, p:'10px', borderRadius:'10px',   boxShadow: 'inset 0px 5px 10px 5px teal'}}>

            <Grid container>
              {animalWalks?.map((animal) => (
                <ExerciseChip key={animal.name} exer={animal} />))}
            </Grid>
          </Box>

        
          <Grid container item>
            <Typography variant='h4'>
              Warm Ups
            </Typography>
          </Grid>
          <Typography sx={{pl:0.5}} variant='caption'>
            Pick four
          </Typography>
          <Box sx={{ mb: 2,p:'10px', borderRadius:'10px',   boxShadow: 'inset 0px 5px 10px 5px teal'}}>

            <Grid container>
              {warmups?.map((warmup) => (
              <ExerciseChip key={warmup.name} exer={warmup} />))}
            </Grid>
          </Box>
        
          <Grid container item>
            <Typography variant='h4'>
              Main Exercises
            </Typography>
          </Grid>
          <Typography sx={{pl:0.5}} variant='caption'>
            Pick six
          </Typography>
          <Box sx={{ mb: 2,p:'10px', borderRadius:'10px',   boxShadow: 'inset 0px 5px 10px 5px teal'}}>

            <Grid container>
              {mains?.map((main) => (
              <ExerciseChip key={main.name} exer={main} />))}
            </Grid>
          </Box>

          <Grid container item>
            <Typography variant='h4'>
              Conditioning
            </Typography>
          </Grid>
          <Typography sx={{pl:0.5}} variant='caption'>
            Pick three
          </Typography>
          <Box sx={{ mb: 2,p:'10px', borderRadius:'10px',   boxShadow: 'inset 0px 5px 10px 5px teal'}}>
            <Grid container>
              {conditioning?.map((con) => (
              <ExerciseChip key={con.name} exer={con} />))}
            </Grid>
          </Box>
        </Box>



    </Container>
  )
}