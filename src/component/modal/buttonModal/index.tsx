import * as React from 'react'

// component
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

interface ButtonModalProps {
  title: string
  content: string
  leftButtonText?: string
  rightButtonText: string
  buttonTitle: string
}

const ButtonModal = (props: ButtonModalProps) => {
  const { title, content, leftButtonText = '취소', rightButtonText, buttonTitle } = props
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {leftButtonText}
          </Button>
          <Button onClick={handleClose} autoFocus color="primary">
            {rightButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default ButtonModal
