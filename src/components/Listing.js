import React, {useState} from "react";
import productTopImage from "../resources/productTop.png";
import productBottomImage from "../resources/productBottom.png";
import "./Listing.css";
import SearchBar from "./SearchBar"; // Adjust the import path if needed
import LargeBanner from "./LargeBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // Import Link and BrowserRouter
import Join from "./Join";
import Atendimento from "./Atendimento";
import Payment from "./Payment";
import Columns from "./Columns";
import EndlessText from "./EndlessText";

const Listing = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    
    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className='listing-container'>
            <div className='banner'>
                {/* Use the image as the background */}
                <button className='popup-button' onClick={openPopup}>
                    {/* Use the button image */}
                </button>
            </div>
            <SearchBar />
            {/* {showProducts ? (
                <ProductList />
            ) : ( */}
            {/* Add the category bar */}
            <div className='category-bar'>
                <div className='category-content'>
                    <div className='hamburger-icon'>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className='category-list'>
                    <Link
              to="/products" // Add the link to the Produtos page
              className="category-item"
            >
              Produtos
            </Link>                        <div className='category-item'>Descartáveis</div>
                        <div className='category-item'>Papéis</div>
                        <div className='category-item'>Dispensadores</div>
                        <div className='category-item'>Higiene e Limpeza</div>
                        <div className='category-item'>
                            Sacos de Lixo / Lixeiras
                        </div>
                        <div className='category-item'>Segurança</div>
                        <div className='category-item'>EPIs</div>
                        <div className='category-item'>Lançamentos</div>
                        <div className='category-item'>Promoções</div>
                        <div className='category-item bold'>Meu carrinho</div>
                    </div>
                </div>
            </div>
            <img
                src={productTopImage}
                alt="Product Top"
                style={{ width: "360px", height: "auto" }}
            />
            <img
                src={productBottomImage}
                alt="Product Bottom"
                style={{ width: "360px", height: "auto" }}
            />
            <Join />
            <Atendimento />
            <Payment />
            <Columns />
            <EndlessText />
        </div>
    );
};

export default Listing;
