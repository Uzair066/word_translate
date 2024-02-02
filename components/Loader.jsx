import React from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from "@mui/material";

function Loader() {
  return (
    <Box sx={{ display: 'flex', justifyContent:"center" }}>
      <CircularProgress color="warning"/>
    </Box>
  )
}

export default Loader;
