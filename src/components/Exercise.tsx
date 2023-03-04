import React, {useState} from 'react';
import { styled, withStyles } from '@mui/material/styles';
import {Card, CardHeader,
  CardMedia,
  Chip,
  CardContent,
  CardActions,
  Collapse,
  Grid,
  Typography,
  Avatar,} from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'
import { useTheme } from '@emotion/react';
import { makeStyles } from '@mui/material/styles';
import TestChip from '../components/test'


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


export const Exercise = (exer) =>{
  const  exercise = exer.exer;    
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const styles = {
    media: {
      height: 100,
      paddingTop: '0%',
    }
};



  return (
    <Card sx={{ maxWidth: 345 }}>
      {!expanded ? (
    <>
    {/* <img src={`${exercise.img.image}`}/> */}
    <CardMedia
      onClick={handleExpandClick}
      component="img"
      image={exercise.img.image}
      alt=""
      style={styles.media}
      />
    <CardActions onClick={handleExpandClick} sx={{display:'flex', justifyContent:'space-between', height:'50px'}}>
      <Typography sx={{flexWrap:'wrap', p:0, m:0}} variant='body1'>
        {exercise?.name}
      </Typography>
      <ExpandMore
        expand={expanded}
        aria-expanded={expanded}
        aria-label="show more"
        >
        <FaCaretUp />
      </ExpandMore>
    </CardActions>
        </>
    ) : (
    <>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent onClick={handleExpandClick} sx={{p:'5px',height:'100px'}}>
          {/* consider making ExerDetails as component to handle breakpoints and style changes  */}
          <Typography sx={{lineHeight:'1.2', fontSize:'14px', height:'50px'}}>
            {exercise?.details}
          </Typography>
        </CardContent>
      </Collapse>
      <CardActions onClick={handleExpandClick} sx={{display:'flex', 
      height:'50px', 
      justifyContent:'space-between'}}>
        <Typography sx={{flexWrap:'wrap', p:0, m:0}} variant='subtitle1'>
        {exercise?.name}
        </Typography>
        <ExpandMore
          expand={expanded}
          aria-expanded={expanded}
          aria-label="show less"
          >
          <FaCaretUp />
        </ExpandMore>
      </CardActions>
    </>
      
    )}
    </Card>
  );
}


export const ExerciseChip = (exer, ) =>{
  const  exercise = exer.exer;   
  const {palette} = useTheme();
  const [clicked, setClicked] = useState(false)
  const theme = useTheme()

  const handleClick = () => {
    setClicked(!clicked)
  };


  const classes = `tokenChip${clicked ? 'Selected' : ''}`

return (<>
  <Chip className={`tokenChip${clicked ? 'Selected' : ''}`} sx={{ m:0.5}}
  label={exercise.name}  onClick={handleClick}  />
  </>
)
}