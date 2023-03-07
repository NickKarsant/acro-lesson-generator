import * as React from 'react';
import { Button, CardActionArea, CardActions, Card,
  CardContent, Stack, Grid,List,ListItem, ListItemText,
  Typography } from '@mui/material';
  import {FaTimes} from 'react-icons/fa'

export const PreviousCurriculum= ({curr, random, custom}: Props) => {


  return (
    <Card sx={{backgroundColor:'white', maxWidth: '800px'}}>
        <CardContent sx={{p:1}}>
          <Grid container sx={{pb:0.4, mt:-0.2}} display="flex" justifyContent="space-between">
            <Grid item>
            created date and time
            </Grid>
            <Grid item>
              <FaTimes />
            </Grid>
          </Grid>

        <Grid container sx={{border: `2px solid red`}}>
          <Grid container item display='flex' justifyContent='space-between' spacing={-1}>
            <List >
              {/* ANIMALS */}
            <ListItem key={'animalWalks'} sx={{ p:0, m:0}}>
                  <ListItemText sx={{p:0, m:0}} primary={
                    <Typography sx={{fontWeight:'bold', textDecoration: 'underline'}}>
                      Animals 
                    </Typography>
                  }/>
                </ListItem>
              
              {curr.animalWalks.map((animal) => {
                return (
                <ListItem key={animal.id} sx={{
                  fontSize: '0.5rem', 
                  lineHeight: 1.5,
                  p:0,
                    m:0}}>
                  <ListItemText sx={{ p:0, m:0}} primary={animal.name} />
                </ListItem>
                )
              })}
              </List>


            {/* WarmUPS */}
              <List>
            <ListItem key={'warmups'} sx={{ p:0, m:0}}>
                  <ListItemText sx={{p:0, m:0}} primary={
                    <Typography sx={{fontWeight:'bold', textDecoration: 'underline'}}>
                      Warm ups 
                    </Typography>
                  }/> 
                </ListItem>
              
              {curr.warmups.map((warmup) => {
                return (
                <ListItem key={warmup.id} sx={{
                  fontSize: '0.5rem', 
                  lineHeight: 1.5,
                  p:0,
                    m:0}}>
                  <ListItemText sx={{ p:0, m:0}} primary={warmup.name} />
                </ListItem>
                )
              })}
              </List>


              <List>
            <ListItem key={'mains'} sx={{ p:0, m:0}}>
                  <ListItemText sx={{p:0, m:0}} primary={
                    <Typography sx={{fontWeight:'bold', textDecoration: 'underline'}}>
                      Main 
                    </Typography>
                  }/>
                </ListItem>
              
              {curr.mains.map((main) => {
                return (
                <ListItem key={main.id} sx={{
                  fontSize: '0.5rem', 
                  lineHeight: 1.5,
                  p:0,
                    m:0}}>
                  <ListItemText sx={{ p:0, m:0}} primary={main.name} />
                </ListItem>
                )
              })}
              </List>

              <List>
            <ListItem key={'conditioning'} sx={{ p:0, m:0}}>
                  <ListItemText sx={{p:0, m:0}} primary={
                    <Typography sx={{fontWeight:'bold', textDecoration: 'underline'}}>
                      Condition 
                    </Typography>
                  }/>
                </ListItem>
              
              {curr.conditioning.map((con) => {
                return (
                <ListItem key={con.id} sx={{
                  fontSize: '0.5rem', 
                  lineHeight: 1.5,
                  p:0,
                    m:0}}>
                  <ListItemText sx={{ p:0, m:0}} primary={con.name} />
                </ListItem>
                )
              })}
              </List>

          
              </Grid>



          </Grid>

        </CardContent>
    </Card>
  );
}