import React, { useState } from "react";
import styles from "../Styles/card.module.css";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import swal from "sweetalert";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "#222831",
    border: "none",
    borderRadius: "7px",
    boxShadow: 24,
    p: 4,
};

const Card = ({ book }) => {
    console.log('book:', book)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        swal({
            title: "Please contact below number",
            text: "Mobile No. : 9412350238",
            icon: "success",
        });
        setOpen(false);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className={styles.card_sl}>
                        <div className={styles.card_image}>
                            <img
                                src={`http://localhost:5000/api/v1/files/${book?.images[0]}`}
                                alt=""
                            />
                        </div>
                        <div className={styles.card_desc}>
                            <div className={styles.card_heading}>
                                {book.title}
                                <br />
                                <small style={{ textTransform: "capitalize", color: "#00adb5" }}><b>{book.language} | {book.category}th | </b><span><b>{book.city}</b></span></small><br />
                            </div>
                            <div className={styles.card_text} style={{ textTransform: "capitalize" }}>
                                {book.description}
                            </div>
                        </div>
                        <button className={styles.card_button} onClick={handleOpen}>
                            Available
                        </button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title" variant="h6" component="h2" style={{ color: '#00adb5' }}>
                                    WHY DO YOU WANT?
                                </Typography>
                                <TextField
                                    id="standard-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    variant="filled"
                                    sx={{ width: "100%", my: 2.5, background: "#fff", borderRadius: '4px' }}
                                />
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "flex-end",
                                        alignItems: "center",
                                        gap: "15px",
                                    }}>
                                    <Button
                                        variant="contained"
                                        style={{ backgroundColor: "grey" }}
                                        size="large"
                                        onClick={handleClose}>
                                        Close
                                    </Button>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        style={{ backgroundColor: "#00adb5" }}
                                        onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Box>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Card;
