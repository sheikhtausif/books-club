import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert';
import styles from "../Styles/loginSignup.module.css"
import { useDispatch } from 'react-redux'
import { signup } from '../Redux/Auth/actions'

const Signup = () => {

    const history = useHistory()
    const dispatch = useDispatch()

    const obj = { name: "", email: "", contact: "", password: "" }
    const [formData, setFormData] = useState(obj)

    const handleChange = (event) => {
        const { name, value } = event.target
        const data = { ...formData, [name]: value }
        setFormData(data)
    }

    const { name, email, password, contact } = formData
    const handleSignup = () => {
        if (name && email && password && contact) {
            // console.log(formData);
            dispatch(signup(formData))
        }
        else {
            swal({
                title: "Please fill all the fields!",
                icon: "info",
                button: "Okay",
            });
        }
        setFormData(obj)
    }

    return (
        <div className={styles.background_signup}>
            <div className={styles.signup_div}>
                <h1>BooksClub</h1>
                <Box
                    style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        flexDirection: "column",
                        gap: "18px"
                    }}
                    component="form"
                    noValidate
                    autoComplete="off">
                    <TextField value={name} name="name" label="Name" type="text" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={handleChange} />
                    <TextField value={email} name="email" label="Email" type="email" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={handleChange} />
                    <TextField value={contact} name="contact" label="Mobile" type="number" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={handleChange} />
                    <TextField value={password} name="password" label="Password" type="password" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={handleChange} />
                </Box>

                <Button variant="contained" size="large" sx={{
                    padding: '12px', backgroundColor: '#00ADB5', fontWeight: 'medium', width: '100%', my: 3, fontSize: '18px', '&:hover': {
                        backgroundColor: '#04c5cf',
                    },
                }} onClick={handleSignup}>Create account</Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1 }}>
                    <Typography variant="p" component="p" sx={{ cursor: 'pointer' }}>

                    </Typography>
                    <Typography variant="p" component="p">
                        Already have an account? <span style={{ cursor: 'pointer', color: '#00ADB5' }}
                            onClick={() => history.push('/login')}
                        >Login</span>
                    </Typography>
                </Box>
            </div>
        </div>
    )
}

export default Signup