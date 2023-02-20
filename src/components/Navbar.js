import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/system';
import { blueGrey } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom'
import SignUpModal from './SignUpModal';
import SignInModal from './SignInModal';
import CreatePost from './CreatePost';

export default function Navbar() {
  const navigate = useNavigate();

  const handleSignIn =() =>{
       navigate("/signin")
  }
  const handleSignUp =() =>{
    navigate("/signup")
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{bgcolor: blueGrey[100], columnGap:"2rem"}}>
        <Toolbar>
        {/* <Button  variant='contained' >Create Post</Button> */}
         <CreatePost/>
         <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} columnGap="2rem">
          {/* <Button variant='outlined' onClick={handleSignIn}>SignIn</Button> */}
          <SignInModal/>
          {/* <Button variant='contained' onClick={handleSignUp}>SignUp</Button> */}
          <SignUpModal/>
          </Stack>
        </Toolbar>
      </AppBar>

      

    </Box>
  );
}