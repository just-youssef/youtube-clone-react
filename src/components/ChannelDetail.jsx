import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Stack, Typography } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {
  const { id } = useParams();
  const [channel, setChannel] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then(data => setChannel(data.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date&type=video`)
    .then(data => setVideos(data.items))
  }, [id]);

  if(!channel || !videos) return <Typography variant="h5" color="#fff">Loading...</Typography>;

  return (
    <Stack direction="column" gap={2} sx={{p: 2, alignItems: "center"}}>
      <ChannelCard channel={channel} channelObj={true} />
      <Videos videos={videos} justifyContent="center" />
    </Stack>
  )
}

export default ChannelDetail