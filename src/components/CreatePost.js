import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreatePost() {
  const navigate = useNavigate();

  const userStatus = useSelector(state => state.auth.userAuthStatus);

  // const [checkUserAuth, setCheckUserAuth] = useState(userStatus);

  // useEffect(() =>{
  //   setCheckUserAuth(userStatus);
  // }, [userStatus])

  const [open, setOpen] = React.useState(false);
  // const [close, setClose] = React.useState(true);
  const handleClose = () => setOpen(false);

  const [title, setTitle] = useState("");

  
  const handleOpen = () => {
    if(localStorage.getItem("isUserLoggedIn") !== "true"){
       handleClose();
       navigate("/signin");
       // setClose();
     
    }else {
      setOpen(true)
    }
 
 }


  const handleNavigate = () => {
      handleClose();
      navigate("/");
    }

  const handleCancel = () => {
    handleClose();
    navigate("/");
  };

  const handleSave = () => {};
  
   

  return (
    <div>
      <Button onClick={handleOpen} variant="contained">
        Create Post
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} id="create-post">
          <GrClose id="close-icon" onClick={handleNavigate} />
          <Typography variant="h5">Add new post</Typography>
          <TextField
            width="100%"
            id="outlined-basic"
            label="Post Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            style={{ width: "100%" }}
            id="filled-multiline-static"
            label="Enter Your Message..."
            multiline
            rows={4}
            // defaultValue="Default Value"
            variant="filled"
          />

            <Box><input accept="image/*" type="file" name="" id="raise-button-file"/>
              </Box>

          <Box id="create-btns">
            <Button variant="outlined" id="" onClick={handleCancel}>
              Close
            </Button>
            <Button variant="contained" id="" onClick={handleSave}>
              Save
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
