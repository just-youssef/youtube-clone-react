import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";


const SearchBar = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");
    
    const handleSubmit = event => {
        event.preventDefault();
        navigate(`/search/${searchTerm}`);
        // setSearchTerm("");
    }
    return (
        <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ 
            p: '2px 4px',
            display: 'flex', 
            alignItems: 'center', 
            width: {xs: 300, sm: 400, md: 500}, 
            borderRadius: 20, 
            justifyContent: "space-between",
            mr: { md: 5}
        }}
        >
            <InputBase
                value={searchTerm}
                onChange={event => setSearchTerm(event.target.value)}
                sx={{ ml: 2 }}
                placeholder="Search.."
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <Search sx={{ color: "#FC1503" }} />
            </IconButton>
        </Paper>
    )
}
export default SearchBar