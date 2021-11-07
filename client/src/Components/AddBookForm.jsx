import React from "react";
import { useState } from "react";
import {
    MenuItem,
    FormControl,
    Select,
    InputLabel,
    TextField,
    Box,
    Typography,
    Button,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { addBook } from '../Redux/App/actions'
import { useDispatch } from 'react-redux'
import { loadData } from "../Utils/localStorage";
// import { Redirect } from "react-router-dom";
import swal from "sweetalert";


export const AddBookForm = () => {
    const user_id = loadData('user_id')
    const obj = { user: user_id, title: "", description: "", category: "", language: "", city: "" }
    const fileObj = [];

    const dispatch = useDispatch()
    const [data, setData] = useState(obj)
    const [file, setFile] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target
        const obj = { [name]: value.toLowerCase() }
        setData({ ...data, ...obj })
    };


    const handleFileChange = (e) => {
        // setFile(e.target.files[0])
        fileObj.push(e.target.files);
        // for (let i = 0; i < fileObj[0].length; i++) {
        //     fileArray.push(URL.createObjectURL(fileObj[0][i]));
        // }
        setFile(fileObj);
    }

    const handleAddBook = () => {
        // console.log(data);
        dispatch(addBook(data, file))
        setData(obj)
        swal({
            title: "Your book is added",
            icon: "success",
        });
    }

    const Input = styled('input')({
        display: 'none',
    });

    // const user_role = loadData('user_role')

    // if (user_role === 'buyer' || user_role === null) {
    //     return <Redirect to='/login' />
    // }

    return (
        <div
            style={{
                height: "92.4vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#393E46",
            }}
        >
            <Box
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "column",
                    boxSizing: "border-box",
                    padding: "20px 35px",
                    marginLeft: "30px",
                    marginRight: "30px"
                }}
                sx={{
                    width: 500,
                    background: "#222831",
                    borderRadius: "5px",
                }}
            >
                <Typography variant="h5" sx={{ color: "#00ADB5", textAlign: "center", my: 1.5 }} component="div">
                    Book Details
                </Typography>

                <TextField
                    id="filled-textarea"
                    label="Book Name"
                    multiline
                    variant="filled"
                    style={{
                        marginTop: "15px",
                    }}
                    sx={{
                        background: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: "4px",
                    }}
                    value={data.title}
                    name="title"
                    onChange={handleChange}
                />
                <TextField
                    id="filled-textarea"
                    label="City"
                    multiline
                    variant="filled"
                    style={{
                        marginTop: "15px",
                    }}
                    sx={{
                        background: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: "4px",
                    }}
                    value={data.city}
                    name="city"
                    onChange={handleChange}
                />
                <TextField
                    id="filled-multiline-static"
                    label="Description"
                    multiline
                    rows={3}
                    variant="filled"
                    style={{
                        marginTop: "15px",
                    }}
                    sx={{
                        background: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: "4px",
                    }}
                    value={data.description}
                    name="description"
                    onChange={handleChange}
                />
                <FormControl
                    style={{ margin: "0", marginTop: "15px" }}
                    variant="filled"
                    sx={{
                        background: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: "4px",
                    }}
                >
                    <InputLabel id="demo-simple-select-filled-label">Standard</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={data.category}
                        name="category"
                        onChange={handleChange}
                    >
                        <MenuItem value={"6"}>6th</MenuItem>
                        <MenuItem value={"7"}>7th</MenuItem>
                        <MenuItem value={"8"}>8th</MenuItem>
                        <MenuItem value={"9"}>9th</MenuItem>
                        <MenuItem value={"10"}>10th</MenuItem>
                        <MenuItem value={"11"}>11th</MenuItem>
                        <MenuItem value={"12"}>12th</MenuItem>
                        <MenuItem value={"others"}>others</MenuItem>
                    </Select>
                </FormControl>
                <FormControl
                    style={{ margin: "0", marginTop: "15px" }}
                    variant="filled"
                    sx={{
                        background: "white",
                        outline: "none",
                        border: "none",
                        borderRadius: "4px",
                    }}
                >
                    <InputLabel id="demo-simple-select-filled-label">Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={data.language}
                        name="language"
                        onChange={handleChange}
                    >
                        <MenuItem value={"english"}>English</MenuItem>
                        <MenuItem value={"hindi"}>Hindi</MenuItem>
                    </Select>
                </FormControl>

                <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleFileChange} />
                    <Button variant="contained" component="span" sx={{
                        my: 2, backgroundColor: "#00ADB5", "&:hover": {
                            backgroundColor: "#04c5cf",
                        },
                    }}>
                        Upload Image
                    </Button>
                </label>

                <Button
                    variant="contained"
                    sx={{
                        padding: "12px",
                        backgroundColor: "#00ADB5",
                        fontWeight: "medium",
                        width: "100%",
                        my: 2,
                        fontSize: "18px",
                        "&:hover": {
                            backgroundColor: "#04c5cf",
                        },
                    }} onClick={handleAddBook}>
                    Add
                </Button>
            </Box>
        </div>
    );
};

export default AddBookForm;
