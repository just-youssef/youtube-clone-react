import React from 'react';
import { Stack, Box, Typography } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, justifyContent }) => {
  if(!videos) return <Typography variant="h5" color="#fff">Loading...</Typography>;

  return (
    <Stack direction="row" flexWrap="wrap" justifyContent={justifyContent} gap={2}>
      {
        videos.map((item, idx) => (
          <Box key={idx}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} bgcolor="#161616" />}
          </Box>
        ))
      }
    </Stack>
  )
}

export default Videos;