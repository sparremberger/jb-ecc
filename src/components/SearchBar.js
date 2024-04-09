// src/components/SearchBar.js
import React, { useState, useEffect } from "react";
import "./SearchBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMapMarkerAlt,
    faComment,
    faUser,
    faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
    const [isInputFocused, setInputFocused] = useState(false);
    const [dynamicPlaceholder, setDynamicPlaceholder] = useState("");
    const placeholderText = "Digite o que procura...";

    useEffect(() => {
        if (!isInputFocused) {
          let currentIndex = 0;
          let increasing = true;
    
          const placeholderInterval = setInterval(() => {
            setDynamicPlaceholder(placeholderText.substring(0, currentIndex));
    
            if (increasing) {
              currentIndex = Math.min(currentIndex + 1, placeholderText.length);
              if (currentIndex === placeholderText.length) {
                increasing = false;
              }
            } else {
              currentIndex = 0;
              if (currentIndex === 0) {
                increasing = true;
              }
            }
          }, 100); // Adjust the interval duration for the desired speed
    
          return () => clearInterval(placeholderInterval);
        } else {
          setDynamicPlaceholder('');
        }
      }, [isInputFocused]);

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    return (
        <div className='search-bar-container'>
            <div
                className={`overlay ${isInputFocused ? "active" : ""}`}
                onClick={handleInputBlur}
            ></div>
            <div className='logo-container'></div>
            <div className='search-input-container'>
                <input
                    type='text'
                    placeholder={dynamicPlaceholder}
                    className={`search-input ${
                        isInputFocused ? "focused" : ""
                    }`}
                    onFocus={handleInputFocus} // Show the overlay when input is focused
                    onBlur={handleInputBlur} // Hide the overlay when input loses focus
                />
            </div>
            <div className='icons-container'>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <FontAwesomeIcon icon={faComment} />
                <FontAwesomeIcon icon={faUser} />
                <FontAwesomeIcon icon={faShoppingCart} />
            </div>
        </div>
    );
};

export default SearchBar;
