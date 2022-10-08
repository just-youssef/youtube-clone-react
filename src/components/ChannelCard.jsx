import React from 'react';
import { Typography, Box, CardContent, CardMedia} from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channel, channelObj, bgcolor }) => {

  return (
    <Box 
      sx={{
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        width: "360px", 
        height: "300px", 
        bgcolor
      }}
    >
      <Link to={`/channel/${channelObj ? channel.id : channel.id.channelId}`}>
        <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <CardMedia 
            image={channel.snippet.thumbnails.high.url || demoProfilePicture}
            alt={channel.snippet.title}
            sx={{width: "180px", height: "180px", borderRadius: "50%", mb: 2, border: "4px solid #FC1503"}}
          />

          <Typography variant="h5" component="div" fontWeight="bold" color="#fff">
              {channel.snippet.title}
              <CheckCircle sx={{ml: "5px", color: "#FC1503"}}/>
          </Typography>

          {channelObj && (
            <Typography sx={{ fontWeight: "bold", color: '#bebebe' }}>
              {parseInt(channel.statistics.subscriberCount).toLocaleString('en-US')} Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard;