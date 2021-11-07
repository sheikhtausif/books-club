import React from 'react'
import Slider from '../Components/Slider'
import Home from '../Components/Home'
import TeamMember from '../Components/TeamMember'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const HomePage = () => {
    return (
        <div style={{ backgroundColor: "#393e46" }}>
            <Slider />
            <Home />
            <Contact />
            <TeamMember />
            <Footer />
        </div>
    )
}

export default HomePage
