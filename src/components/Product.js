// src/components/Product.js
import React from "react";
import "./Product.css"; // Import the CSS file for Product
import pricingImage from "../resources/pricing.png"; // Import the pricing image

const Product = ({ title, price, promoPrice, installments, image }) => {
    return (
        <div className="product">
            <img src={image} alt={title} className="product-image" />
            {/* <div className="product-details">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">
                    {promoPrice ? <span className="promo-price">{promoPrice}</span> : null}
                    Por {price}
                </p>
                {installments && <p className="product-installments">{installments}</p>}
            </div> */}
            <img src={pricingImage} alt="Pricing" className="pricing-image" />
        </div>
    );
};

export default Product;
