import React, {useEffect, useState} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Stack } from "@mui/system";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SignUpModal from "./SignUpModal";
import SignInModal from "./SignInModal";
import CreatePost from "./CreatePost";
import { auth } from "../firebase/firebase-config";
import { signOut } from "firebase/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { authStatus } from "../redux/authSlice";


export default function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const selector  = useSelector(state => state.auth.userAuthStatus);

   const [loginStatus,setLoginStatus] = useState(false);

  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };

 
  const handleLogout = () => {
    // navigate("/signup")
    signOut(auth).then(() => {
     localStorage.setItem("isUserLoggedIn", false);
    //  alert("Signed out");
      dispatch(authStatus(false));
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      toast.error(error);
    });

  };

  const handleLogin = () => {

    navigate("/signin");
  };

  // console.log(typeof localStorage.getItem("isUserLoggedIn"));

  useEffect(() =>{
   const userStatus =  localStorage.getItem("isUserLoggedIn");
   setLoginStatus(userStatus);

  }, [selector]);


  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ bgcolor: blueGrey[100], columnGap: "2rem" }}
      >
        <ToastContainer />
        <Toolbar>
          {/* <Button  variant='contained' >Create Post</Button> */}
          <CreatePost />
          <Stack
            flexDirection={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
            columnGap="2rem"
          >
            {(loginStatus === "true") ? (
              <Button onClick={handleLogout} variant="outlined">
                Logout
              </Button>
            ) : (
              <>
                <Button onClick={handleLogin} variant="outlined">
                Login
              </Button>
              </>
            )}
          </Stack>
        </Toolbar>
        {/* <p>this is {tyeof localStorage.getItem("isUserLoggedIn")}</p> */}
      </AppBar>

      <Routes>
        <Route path="/signin" element={<SignInModal />} />
        <Route path="/signup" element={<SignUpModal />} />
      </Routes>
    </Box>
  );
}
