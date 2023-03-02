import React, {useState} from 'react';
import {ImageList,
ImageListItem,
ImageListItemBar,
ListSubheader,
IconButton} from '@mui/material';
import { Exercise } from "../components/Exercise";
import {FaCaretDown, FaCaretUp} from 'react-icons/fa'

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export const OrganizedList = ({exercises}) => {
  const [showDetails, setShowDetails] = useState(false)
  return (
<ImageList
      variant="quilted"
      // cols need breakpoint for consistent UI
      cols={2}
      gap={4}
      rowHeight={150}
    >      {exercises?.map((exercise) => (
        <ImageListItem  key={exercise.name}>
          <Exercise exer={exercise} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
