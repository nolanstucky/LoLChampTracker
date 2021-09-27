import { React, useEffect, useState, useRef } from 'react'
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{ position: "fixed", top: 0, width: "100%", height: "100px", backgroundColor: "#121c40", zIndex: 10, boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.9), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} boxShadow="initial">
        <Button onClick={handleClick} size="500px">Three</Button>
    </Box>
  );
}