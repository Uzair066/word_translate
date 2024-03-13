"use client";

import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, Divider } from "@mui/material";

function DeleteModal({ del, currentArticle, openDelModal, setDeleteModal }) {
    
    
  return (
    <Box>
      <Dialog
        open={openDelModal}
        //   onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{fontSize:"16px"}}>Are you sure you want to delete {currentArticle?.slug}?</DialogTitle>
        <Divider />
        <DialogActions>
          <Button onClick={() => setDeleteModal(false)}>Cancel</Button>
          <Button onClick={() => del(currentArticle?.id) }>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default DeleteModal;
