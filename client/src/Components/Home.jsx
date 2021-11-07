import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../Styles/home.module.css'


const Home = () => {

    return (
        <Container className={styles.home_cont_main}>
            <h2 className={styles.moto_tag}>WHO ARE WE?</h2>
            <Row className={`${"d-flex align-items-center  justify-content-start"} ${styles.motivate_row}`}>
                <Col className={styles.Image_column} xs={6} md={4}>
                    <img className={styles.Card_image} src="https://uusaratoga.org/wp-content/uploads/2021/01/Zoom-Monitoring.png" alt="" />
                </Col>
                <Col xs={12} md={8}>
                    <p className={styles.para_justify} >   We are the BOOKS CLUB. This application facilitates user by providing good and expensive books at free of costs. This also allows the user to donate their books through the app. The basic moto of us is to extend the helping hands to someone who indeed needed it.</p>
                </Col>
            </Row>
            <h2 style={{ marginTop: "50px" }} className={styles.moto_tag}>WHY WE ARE HERE?</h2>
            <Row className={`${"d-flex align-items-center  justify-content-start"} ${styles.motivate_row} `}>
                <Col xs={12} md={8}>
                    <p className={styles.para_justify}>    We created this app in order to help those who are in need of books but can’t afford them due to any reason like being expensive or being unavailable in market. As the saying goes knowledge is priceless, so the priceless thing should be provided free, that why we are here to provide the free books to develop a educative society.
                    </p>
                </Col>
                <Col className={styles.Image_column} xs={6} md={4}>
                    <img className={styles.Card_image} src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191101192309/10-Things-You-Should-Know-As-a-Web-Developer.png" alt="" />
                </Col>
            </Row>
            <h2 style={{ marginTop: "50px" }} className={styles.moto_tag}>HOW WE ARE HERE?</h2>
            <Row className={`${"d-flex align-items-center  justify-content-start"} ${styles.motivate_row} `}>
                <Col className={styles.Image_column} xs={6} md={4}>
                    <img className={styles.Card_image} src="https://uusaratoga.org/wp-content/uploads/2021/01/Zoom-Monitoring.png" alt="" />
                </Col>
                <Col xs={12} md={8}>
                    <p className={styles.para_justify}>This is common problem with us that we keep our used books at home or sell them at recycle bin centres. We do not give it a thought that they can also be used again by someone else. There are many who want to study but there are many obstacles.  We analysed the issue, and created the online market for them. Through this app we feel are fortunate to at least remove an obstacle in their education.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
