import React, { useState, useEffect} from 'react';
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selected, setSelected] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selected}`)
    .then(data => setVideos(data.items))
  }, [selected]);

  if(!videos) return <Typography variant="h5" color="#fff">Loading...</Typography>;

  return (
    <Stack sx={{flexDirection: {sx: "column", md: "row"}}}>
      <Sidebar selected={selected} setSelected={setSelected} />

      <Box p={2} sx={{flex: 2}}>
        <Typography variant="h5" component="div" fontWeight="bold" mb={2} color="#fff">
          {selected} <span style={{color: "#F31503"}}>Vidoes</span>
        </Typography>

        <Videos videos={videos} justifyContent="center" />
      </Box>
    </Stack>
  )
}

export default Feed