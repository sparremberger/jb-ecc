import React from "react";
import "./RandomProducts.css"; // Import the CSS file for styling

const RandomProducts = ({ title, images, productNames }) => {
    return (
        <div className="random-products">
            <h2 className="section-title">{title}</h2>
            <div className="product-list">
                {images.map((image, index) => (
                    <div key={index} className="product-item">
                        <img src={image} alt={`Product ${index}`} />
                        {productNames && productNames[index] && (
                            <div className="product-name">{productNames[index]}</div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RandomProducts;
