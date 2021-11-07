import React from "react";
import { Route, Switch, } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import NavbarMain from "./Components/NavbarMain";
import BookPage from "./Pages/BookPage";
import HomePage from "./Pages/HomePage";
// import { useSelector } from 'react-redux'
import AddBookForm from "./Components/AddBookForm";
// import { loadData } from "./Utils/localStorage";


const App = () => {

    // const state = useSelector(state => state.auth)
    // console.log('state:', state)

    return (
        <div>
            <NavbarMain />
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/books">
                    <BookPage />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/addbook">
                    <AddBookForm />
                </Route>
            </Switch>

        </div>
    );
};

export default App;
