import React, { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { Typography, Box, Stack, Chip, Divider } from "@mui/material";
import { fetchFromAPI } from '../utils/fetchFromAPI';
import CheckCircle from '@mui/icons-material/CheckCircle';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { Videos } from "./";

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then(data => setVideo(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then(data => setRelatedVideos(data.items))
  }, [id]);

  if(!video || !relatedVideos) return <Typography variant="h5" color="#fff">Loading...</Typography>;

  const { snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount, } } = video;

  return (
    <Stack direction="column" p={2} gap={2}>
      <Box>
        <ReactPlayer controls url={`https://www.youtube.com/watch?v=${id}`} width="auto" height="80vh" />
        
        <Typography variant="h4" component="div" fontWeight="bold" color="#fff" pt={2}>
          {title}
        </Typography>

        <Stack direction="row" gap={2} justifyContent="end" pt={2}>
          <Chip 
            icon={<ThumbUpIcon />} 
            label={
              <Typography variant="h6" component="div" color="#bebebe">
                {parseInt(likeCount).toLocaleString()} Likes
              </Typography>
            }
          />

          <Chip 
            p={2}
            icon={<VisibilityIcon />} 
            label={
              <Typography variant="h6" component="div" color="#bebebe">
                {parseInt(viewCount).toLocaleString()} Views
              </Typography>
            }
          />
        </Stack>

        <Link to={`/channel/${channelId}`}>
          <Typography variant="h5" component="div" fontWeight="bold" color="#fff" pt={2}>
            {channelTitle}
            <CheckCircle sx={{ml: "5px", color: "#FC1503"}}/>
          </Typography>
        </Link>
      </Box>
      
      <Divider color="#bebebe" />
      <Typography variant="h5" component="div" fontWeight="bold" color="#fff">
          Related Videos To: <span style={{color: "#F31503"}}>{title}</span>
        </Typography>
      <Videos videos={relatedVideos} justifyContent="center" />
    </Stack>
  )
}

export default VideoDetail