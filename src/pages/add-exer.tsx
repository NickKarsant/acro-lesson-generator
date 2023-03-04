import React from 'react'
import {useRouter} from 'next/router'
import Header from '../components/Header'
import { Container, Button, Box, Grid, Typography, Stack } from '@mui/material'
import SimpleList from '../components/SimpleList'
import {OrganizedList} from '../components/OrganizedList'
import {animalWalks} from '../data/animalWalks'
import {warmups} from '../data/warmups'
import {conditioning} from '../data/conditioning'
import Form from '../components/Form'





export default function BeginnerCurriculum() {
  const {push} = useRouter()
  
  return (
    <Container  fixed sx={{border: '1px solid green'}}>
      
    <Grid container display='flex' justifyContent='center'>
      <Typography variant='h4'>
        Custom Exercises
      </Typography>
    </Grid>

<Form />


    </Container>
  )
}
