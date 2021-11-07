import React, { useState } from 'react'
import styles from '../Styles/contact.module.css'


const Contact = () => {
    const obj = { email: "", message: "" }
    const [formData, setFormData] = useState(obj)

    const handleChange = (event) => {
        const { name, value } = event.target
        const data = { ...formData, [name]: value }
        setFormData(data)
    }
    const { email, message } = formData
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        setFormData(obj)
    }

    return (
        <div className={styles.contact_main}>
            <div className={styles.formControl}>
                <h2 style={{ textAlign: "center", color: "#00ADB5" }} className={styles.contact_heading}>CONTACT US</h2>
                <form method="POST" >
                    <div className="form-group">
                        <label className={styles.label} htmlFor="exampleFormControlInput1">Email address</label>
                        <input type="text" value={email} className={`form-control ${styles.input}`} name="email" id="exampleFormControlInput1"
                            onChange={handleChange}
                            placeholder="Email" required />
                    </div>
                    <div className="form-group">
                        <label className={styles.label} htmlFor="exampleFormControlTextarea1">Message</label>
                        <textarea value={message} className={`form-control ${styles.input}`} name="message" id="exampleFormControlTextarea1"
                            rows="5" onChange={handleChange}
                            placeholder="Message..." required></textarea>
                    </div>
                    <button className={styles.form_button} type="submit" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
