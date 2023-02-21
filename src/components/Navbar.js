import * as React from "react";
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


export default function Navbar() {
  const navigate = useNavigate();

  

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
     alert("Signed out");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      toast.error(error);
    });

  };

  const handleLogin = () => {
    navigate("/signin");
  };

  console.log(typeof localStorage.getItem("isUserLoggedIn"));


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
            {(localStorage.getItem("isUserLoggedIn") === "true") ? (
              <Button onClick={handleLogout} variant="contained">
                Logout
              </Button>
            ) : (
              <>
                <Button onClick={handleLogin} variant="contained">
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
