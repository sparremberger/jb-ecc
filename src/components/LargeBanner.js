import React, { useState, useEffect } from "react";
import "./LargeBanner.css"; // Import the CSS file for LargeBanner
import higiene from "../resources/carousel/higiene.jpg";
import papeis from "../resources/carousel/papeis.jpg";
import descartaveis from "../resources/carousel/descartaveis.jpg";
import lixeiras from "../resources/carousel/lixeiras.jpg";
import dispensadores from "../resources/carousel/dispensadores.jpg";


const LargeBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [higiene, papeis, descartaveis, lixeiras, dispensadores]; // Add more image filenames if needed

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images]); // Include images as a dependency

    return (
        <div className="large-banner">
            <div className="carousel-container">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index}`}
                        className={`carousel-image ${index === currentIndex ? "active" : ""}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default LargeBanner;
