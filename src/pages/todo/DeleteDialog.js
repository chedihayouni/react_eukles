import React, { Fragment } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const DeleteDialog = (props) => {
    const { isOpen, setIsOpen, deleteToDo, todo } = props;
    return (
        <Fragment>
            <Dialog
                open={isOpen}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    Removing todo
                    </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        Are you sure you want to delete this todo?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => { setIsOpen(false) }} color="primary">
                        Cancel
                        </Button>
                    <Button onClick={() => { deleteToDo(todo.id); setIsOpen(false) }} color="secondary">
                        Delete
                        </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
    );
}

export default DeleteDialog;
