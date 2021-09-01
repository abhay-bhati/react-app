import React, {useContext, useState} from 'react';
import { ModalContext } from '../store/modal-context';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function AlertDialog(props) {

  const ModalCtx = useContext(ModalContext);
  console.log(ModalCtx);
    
  const handleClose = () => {
    ModalCtx.submitclick(false);
  };

  return (
    <div>
      <Dialog
        open={ModalCtx.value}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{textAlign:'center', marginTop:'20px'}}>Appointment Booked</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You have successfully booked an appointment.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};


export default AlertDialog;
