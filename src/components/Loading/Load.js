import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Load = () => {
    return (
        <Box sx={{ 
            display: 'flex',
            width: '100%',
            height:"30vh",
            top:"50%",
            left: "50%",
            textAlign:"center",
            justifyContent:"center",
            color:'red'
            }}
        >
          <CircularProgress  
            sx={{
                "--CircularProgress-size": "100px",
                "--CircularProgress-track-thickness": "60px",
                "--CircularProgress-progress-thickness": "30px"
            }}/>
        </Box>
      );
}

export default Load;