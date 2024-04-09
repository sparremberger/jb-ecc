import React from "react";
import "./DeliveryBanner.css";

const DeliveryBanner = ({ image }) => {
    return (
        <div className="delivery-banner">
            <img src={image} alt="Delivery Banner" className="banner-image" />
        </div>
    );
};

export default DeliveryBanner;
