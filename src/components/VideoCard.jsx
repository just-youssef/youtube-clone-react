import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from '@mui/icons-material';
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video: {id: { videoId }, snippet} }) => {
    return (
        <Card sx={{width: "360px", height: "300px", boxShadow: "none", borderRadius: 0}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia 
                    image={snippet.thumbnails.high.url || demoThumbnailUrl}
                    alt={snippet.title}
                    sx={{width: "360px", height: "180px"}}
                />
            </Link>

            <CardContent sx={{bgcolor: "#161616", height: "120px"}}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography component="div" variant="subtitle1" fontWeight="bold" color="#fff">
                        {snippet.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>
                <Link to={snippet.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
                    <Typography component="div" variant="subtitle2" fontWeight="bold" color="#bebebe" mt={1}>
                        {snippet.channelTitle.slice(0, 60) || demoChannelTitle.slice(0, 60)}
                        <CheckCircle sx={{fontSize: "15px", ml: "5px", color: "#FC1503"}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    )
}

export default VideoCard;