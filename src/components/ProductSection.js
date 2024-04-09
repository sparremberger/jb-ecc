// src/components/ProductSection.js
import React from "react";
import "./ProductSection.css"; // Import the CSS file for ProductSection
import Product from "./Product"; // Import the Product component
import { Link } from "react-router-dom";
import kartHoverImage from "../resources/kart-hover.png";

const ProductSection = ({ title, products }) => {
    return (
        <div className='product-section'>
            <h2 className='product-section-title'>{title}</h2>
            <div className='product-list'>
                {products.map((product, index) => (
                    <Link
                        to={`/listing`} // Add the link with the index as parameter
                        key={index}
                    >
                        <div className="product-container">
                            <Product {...product} />
                            <img
                                src={kartHoverImage}
                                alt="Kart Hover"
                                className="hover-image"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductSection;
