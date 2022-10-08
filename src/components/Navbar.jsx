import React from 'react'
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from './SearchBar';

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{ position: "sticky", bgcolor: "#161616", top: 0, justifyContent: "space-between"}}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
      <img src={logo} alt="logo" height={60} />
      <Typography
        variant='h6' component="div" color="#fff" ml={1}
        sx={{display: {xs: "none", sm: "block"}}}
      >
          YouTube Clone
        </Typography>
    </Link>
    <SearchBar />
  </Stack>
)

export default Navbar