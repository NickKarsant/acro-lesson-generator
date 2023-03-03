// import "../global.css";
import {Chip} from '@mui/material';


export default function TextChip({label}) {

  const handleClick = () => {
    alert('You clicked the Chip.');
  };
  return (
    <div>
      <Chip
        className="tokenChip" 
        label={label}
        onClick={handleClick}
      />  
    </div>
  );
}
