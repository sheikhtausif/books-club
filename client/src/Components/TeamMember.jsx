import React from 'react'
import styles from '../Styles/teamMember.module.css';
import tausif_profile from '../Assets/Images/tausif_profile.jfif'
import vaibhav_profile from '../Assets/Images/vaibhav_profile.png'
import sumit_profile from '../Assets/Images/sumit_profile.jfif'
import pawan_profile from '../Assets/Images/pawan_profile.jpg'

const TeamMember = () => {
    return (
        <>
            <div className={styles.main}>
                <h2 style={{ textAlign: "center", color: "#00adb5", marginBottom: "20px" }}>OUR TEAM</h2>
                <div className={styles.grid_div}>
                    <div className={`${styles.wrapper} ${"mx-4"} ${"my-2"}`}>
                        <div className={styles.footer_profile}>
                            <div><img className={styles.profile_tag} src={tausif_profile} alt="" /></div>
                        </div>
                        <div className={styles.profile_name_div}>
                            <div className={styles.profile_div}>
                                <h5 style={{ color: "white" }}>Mohd Tausif</h5>
                            </div>
                            <div className={styles.icon_div} >
                                <div className={styles.icon}>
                                    <a className={styles.Link_add} href="https://github.com/sheikhtausif" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-github"></i>

                                    </a>
                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://www.linkedin.com/in/mohdtausif/" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-linkedin"></i>

                                    </a>

                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://dev.to" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-dev"></i>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.wrapper} ${"mx-4"} ${"my-2"}`}>
                        <div className={styles.footer_profile}>
                            <div><img className={styles.profile_tag} src={vaibhav_profile} alt="" /></div>

                        </div>
                        <div className={styles.profile_name_div}>
                            <div className={styles.profile_div}>
                                <h5 style={{ color: "white" }}>Vaibhav Raj</h5>
                            </div>
                            <div className={styles.icon_div} >
                                <div className={styles.icon}>
                                    <a className={styles.Link_add} href="https://github.com/vaibhav-raj" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-github"></i>

                                    </a>
                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://www.linkedin.com/in/vaibhav-raj-alpha/" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-linkedin"></i>

                                    </a>

                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://dev.to/" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-dev"></i>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.wrapper} ${"mx-4"} ${"my-2"}`}>
                        <div className={styles.footer_profile}>
                            <div><img className={styles.profile_tag} src={sumit_profile} alt="" /></div>
                        </div>
                        <div className={styles.profile_name_div}>
                            <div className={styles.profile_div}>
                                <h5 style={{ color: "white" }}>Sumit Bhandhari</h5>
                            </div>
                            <div className={styles.icon_div} >
                                <div className={styles.icon}>
                                    <a className={styles.Link_add} href="https://github.com/samy721" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-github"></i>

                                    </a>
                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://www.linkedin.com/in/sumit-kumar-bhandari/" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-linkedin"></i>

                                    </a>

                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://dev.to/" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-dev"></i>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.wrapper} ${"mx-4"} ${"my-2"}`}>
                        <div className={styles.footer_profile}>
                            <div><img className={styles.profile_tag} src={pawan_profile} alt="" /></div>
                        </div>
                        <div className={styles.profile_name_div}>
                            <div className={styles.profile_div}>
                                <h5 style={{ color: "white" }}>Pawan Patidar</h5>
                            </div>
                            <div className={styles.icon_div} >
                                <div className={styles.icon}>
                                    <a className={styles.Link_add} href="https://github.com/pawanpatidar21/" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-github"></i>
                                    </a>
                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://www.linkedin.com/in/pawanpatidar21/" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-linkedin"></i>

                                    </a>

                                </div>
                                <div className={styles.icon} >
                                    <a className={styles.Link_add} href="https://dev.to/?signin=true" variant="" target="_blank" rel="noopener noreferrer" >
                                        <i className="fab fa-dev"></i>

                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TeamMember
