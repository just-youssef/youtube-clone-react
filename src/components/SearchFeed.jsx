import React, { useState, useEffect} from 'react';
import { Box, Typography } from "@mui/material";
import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from 'react-router-dom';

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then(data => setVideos(data.items))
  }, [searchTerm]);

  if(!videos) return <Typography variant="h5" color="#fff">Loading...</Typography>;

  return (
    <Box p={2} sx={{flex: 2}}>
        <Typography variant="h5" component="div" fontWeight="bold" mb={2} color="#fff">
          Seacrch Results For: <span style={{color: "#F31503"}}>{searchTerm}</span>
        </Typography>

        <Videos videos={videos} justifyContent="center" />
    </Box>
  )
}

export default SearchFeed;