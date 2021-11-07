import React from 'react'
import { Carousel } from 'react-bootstrap'
import image1 from '../Assets/Images/book-c2.jpg'
import image2 from '../Assets/Images/book-c7.jpg'
import image3 from '../Assets/Images/book-c5.jpg'


const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

    )
}

export default Slider
