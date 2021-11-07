import React from "react";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import Card from "../Components/Card";
import styles from "../Styles/bookPage.module.css";
import { getAllBooks } from '../Redux/App/actions'
import { useSelector, useDispatch } from 'react-redux'
// import { loadData } from "../Utils/localStorage";
// import { Redirect } from 'react-router-dom'

const BookPage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.app)
    // console.log('state:', state)
    const { allBooks } = state
    // console.log('allBooks:', allBooks)

    useEffect(() => {
        dispatch(getAllBooks())
    }, [dispatch])

    // const user_role = loadData('user_role')

    // if (user_role === 'provider' || user_role === null) {
    //     return <Redirect to='/login' />
    // }

    return (
        <div className={styles.main_div}>
            <Filter />
            <div className={styles.books}>
                {allBooks?.map((el, i) => (
                    <Card book={el} key={i} />
                ))}
            </div>
        </div>
    );
};

export default BookPage;
