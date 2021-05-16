import React from 'react';
import Formsy from 'formsy-react'
import TextFieldFormsy from '../../common/FormsyTextField'
import moment from "moment";
import DateFormsy from '../../common/DateFormsy';
import {
    Dialog,
    DialogTitle,
    DialogContent,
} from '@material-ui/core';

export const EditDialog = (props) => {
    const { todo, handleEdit, isModalOpen, setIsModalOpen } = props;

    return (
        <Dialog
            open={isModalOpen}
            data-test="dialog"
            maxWidth="xl"
            className="justify-center"
        >
            <DialogTitle
                data-test="dialogTitle"
                id="form-dialog-title"
                className="whitespace-nowrap mx-96 my-16"
            >
                Edit todo
        </DialogTitle>
            <DialogContent data-test="dialogContent">
                <Formsy
                    className="flex flex-col"
                    method="POST"
                    onSubmit={handleEdit}
                >
                    <TextFieldFormsy
                        id="title"
                        className="mr-3"
                        type="text"
                        name="title"
                        label="Title"
                        value={todo.title}
                        validations={{
                            minLength: 3,
                        }}
                        validationErrors={{
                            minLength: "At least 3 characters",
                        }}
                        variant="outlined"
                        required
                    />
                    <TextFieldFormsy
                        id="description"
                        className="mr-3 mb-3"
                        type="text"
                        name="description"
                        label="Description"
                        value={todo.description}
                        validations={{
                            minLength: 3,
                        }}
                        validationErrors={{
                            minLength: "At least 3 characters",
                        }}
                        variant="outlined"
                        required
                    />
                    <DateFormsy
                        className="mr-3"
                        label="Date"
                        id="date"
                        required
                        name="date"
                        inputVariant="outlined"
                        InputLabelProps={{
                            shrink: true
                        }}
                        value={moment(todo.date)}
                    />
                    <button type="submit" className="btn btn-primary ml-3 mb-1 mt-2">
                        Update
                        </button>
                    <button className="btn btn-secondary ml-3 mb-1 mt-2" onClick={() => setIsModalOpen(!isModalOpen)}>
                        Close
                        </button>
                </Formsy>
            </DialogContent>
        </Dialog>
    );
}

export default EditDialog;
