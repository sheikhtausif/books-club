import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, useHistory, } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../Redux/Auth/actions'
import { loadData } from '../Utils/localStorage'

import styles from "../Styles/navbarmain.module.css";

export const NavbarMain = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    // eslint-disable-next-line
    const state = useSelector(state => state.auth)
    // const { isAuth } = state


    const handleLogout = () => {
        localStorage.clear()
        dispatch(logout())
        history.push('/login')
    }

    const token = loadData('token')
    const user_name = loadData('user_name')?.split(' ')[0]
    // const user_role = loadData('user_role')

    return (

        <Navbar style={{ background: "#222831" }} variant="dark" expand="lg" sticky="top" className={styles.navbar_main}>
            <div style={{ display: "flex", alignItems: "center", gap: "50px" }}>
                <NavLink to="/">
                    <img
                        alt=""
                        src="https://img.icons8.com/color/24/000000/read.png"
                        width="30"
                        className="d-inline-block align-top" />
                    <span>BooksClub</span>
                </NavLink>
                <NavLink to="/books">Books</NavLink>
            </div>
            <Nav
                style={{
                    gap: "14px",
                    display: "flex",
                    alignItems: "center",
                }}>
                {token ?
                    <>
                        <Link to="#"><Button className={styles.nav_button_add} style={{ background: "#00ADB5" }}>{user_name}</Button></Link>
                        <Button className={styles.nav_button_add} style={{ background: "#00ADB5" }} onClick={handleLogout}>Logout</Button>
                    </>
                    : <>
                        <Link to="/login"><Button className={styles.nav_button_add} style={{ background: "#00ADB5" }} >Login</Button></Link>
                        <Link to="/signup"><Button className={styles.nav_button_add} style={{ background: "#00ADB5" }} >Signup</Button></Link>
                    </>}
            </Nav>
        </Navbar>
    );
};

export default NavbarMain;
