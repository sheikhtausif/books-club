import React from 'react'
import { Row, Col } from 'react-bootstrap';
import styles from '../Styles/footer.module.css'



const Footer = () => {
    return (
        <div style={{ marginTop: "40px", padding: "20px", background: "#222831" }}>
            <Row>
                <Col className={styles.copyright}>  <div><h5>Created By Web Warriors | © 2021-2022 All Rights Reserved</h5></div></Col>
            </Row>
        </div>
    )
}

export default Footer
