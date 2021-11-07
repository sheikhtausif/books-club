import React from 'react'
import { useState } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert';
import styles from "../Styles/loginSignup.module.css"
import { useDispatch } from 'react-redux'
import { login } from '../Redux/Auth/actions'
import { useSelector } from 'react-redux'


const Login = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const obj = { email: "", password: "" }
    const [formData, setFormData] = useState(obj)

    const state = useSelector(state => state.auth)
    console.log('state:', state)
    // const { isAuth } = state
    const user_role = state.user.role
    // console.log(isAuth, role)

    if (user_role === 'provider') {
        return <Redirect to='/provider' />
    }
    if (user_role === 'buyer') {
        return <Redirect to='/books' />
    }


    const handleChange = (event) => {
        const { name, value } = event.target
        const data = { ...formData, [name]: value }
        setFormData(data)
    }

    const { email, password } = formData
    const handleLogin = () => {
        if (email && password) {
            // console.log(formData)
            dispatch(login(formData))
        }
        else {
            swal({
                title: "Please fill all the fields!",
                icon: "info",
                button: "Okay",
                timer: 2000,
            });
        }
        setFormData(obj)
    }

    return (
        <div className={styles.background_login}>

            <div className={styles.login_div}>
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
                    <TextField value={email} name="email" label="Email" type="email" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={handleChange} />
                    <TextField value={password} name="password" label="Password" type="password" variant="filled" sx={{ background: "white", outline: 'none', border: 'none', borderRadius: '4px' }} onChange={handleChange} />
                </Box>

                <Button variant="contained" size="large" className={styles.login_btn} sx={{
                    padding: '12px', backgroundColor: '#00ADB5', fontWeight: 'medium', width: '100%', my: 3, fontSize: '18px', '&:hover': {
                        backgroundColor: '#04c5cf',
                    },
                }} onClick={handleLogin}>Login</Button>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', my: 1 }}>
                    <Typography variant="p" component="p" sx={{ cursor: 'pointer' }}>
                        Forget Password?
                    </Typography>
                    <Typography variant="p" component="p">
                        Dont't have an account? <span style={{ cursor: 'pointer', color: '#00ADB5' }}
                            onClick={() => history.push('/signup')}
                        >Signup</span>
                    </Typography>
                </Box>
            </div>
        </div>
    )
}

export default Login