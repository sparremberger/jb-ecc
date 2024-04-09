import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // Import Link and BrowserRouter
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./ProductList.css";
import Product from "./Product";
import SearchBar from "./SearchBar"; // Import the SearchBar component
import RandomProducts from "./RandomProducts";
import leftbarImage from "../resources/leftbar.png"; // Import the leftbar image
import Join from "./Join";
import Atendimento from "./Atendimento";
import Payment from "./Payment";
import Columns from "./Columns";
import EndlessText from "./EndlessText";


import produto1 from "../resources/produtos/1.jpg";
import produto2 from "../resources/produtos/2.jpg";
import produto3 from "../resources/produtos/3.png";
import produto4 from "../resources/produtos/4.jpg";
import produto5 from "../resources/produtos/5.jpg";

import kartHoverImage from "../resources/kart-hover.png";

import produto6 from "../resources/produtos/6.jpg";
import produto7 from "../resources/produtos/7.jpg";
import produto8 from "../resources/produtos/8.jpg";
import produto9 from "../resources/produtos/5.jpg";
import produto10 from "../resources/produtos/10.jpg";
import produto11 from "../resources/produtos/11.jpg";

const ProductList = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const randomProductImages = [
        produto6,
        produto7,
        produto8,
        produto9,
        produto10,
        produto11,
    ];
    const products = [
        // Add more products

        {
            title: "Dispenser Poupa Copo de Café",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto1,
        },
        {
            title: "Saboneteira Liquida para refil de 700ml.",
            price: "$50",
            image: produto2,
        },
        {
            title: "Saboneteira Liquida Reservatório 800 ml",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto3,
        },
        {
            title: "Toalheiro Papel Bobina Alavanca Frontal",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto4,
        },
        {
            title: "Suporte Papel Higiênico Rolão",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto5,
        },
        // Add more products as needed
        {
            title: "Dispenser Poupa Copo de Café",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto6,
        },
        {
            title: "Saboneteira Liquida para refil de 700ml.",
            price: "$50",
            image: produto7,
        },
        {
            title: "Saboneteira Liquida Reservatório 800 ml",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto8,
        },
        {
            title: "Toalheiro Papel Bobina Alavanca Frontal",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto9,
        },
        {
            title: "Suporte Papel Higiênico Rolão",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto10,
        },
        // Add more products as needed
        {
            title: "Dispenser Poupa Copo de Café",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto1,
        },
        {
            title: "Saboneteira Liquida para refil de 700ml.",
            price: "$50",
            image: produto2,
        },
        {
            title: "Saboneteira Liquida Reservatório 800 ml",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto3,
        },
        {
            title: "Toalheiro Papel Bobina Alavanca Frontal",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto4,
        },
        {
            title: "Suporte Papel Higiênico Rolão",
            price: "$100",
            promoPrice: "$80",
            installments: "4x $20",
            image: produto5,
        },
        // Add more products as needed
    ];

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div className='product-list-container'>
            <div className='banner'>
                {/* Use the image as the background */}
                <button className='popup-button' onClick={openPopup}>
                    {/* Use the button image */}
                </button>
            </div>
            <SearchBar />

            <div className='right-column'>
                <div className='category-bar'>
                    <div className='category-content'>
                        <div className='hamburger-icon'>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                        <div className='category-list'>
                            <Link to='/products' className='category-item'>
                                Produtos
                            </Link>
                            <div className='category-item'>Descartáveis</div>
                            <div className='category-item'>Papéis</div>
                            <div className='category-item'>Dispensadores</div>
                            <div className='category-item'>
                                Higiene e Limpeza
                            </div>
                            <div className='category-item'>
                                Sacos de Lixo / Lixeiras
                            </div>
                            <div className='category-item'>Segurança</div>
                            <div className='category-item'>EPIs</div>
                            <div className='category-item'>Lançamentos</div>
                            <div className='category-item'>Promoções</div>
                            <div className='category-item bold'>
                                Meu carrinho
                            </div>{" "}
                        </div>
                    </div>
                </div>

                <RandomProducts
                    title='Produtos que podem ser do seu interesse...'
                    images={randomProductImages}
                />
                <div className='two-column-layout'>
                    <div className='left-column'>
                        <img
                            src={leftbarImage}
                            alt='Left Bar'
                            style={{ maxWidth: "260px" }}
                        />
                    </div>
                    <div className='right-column'>
                        <div className='productsContainer'>
                            {products.map((product, index) => (
                                <Link
                                    to={`/listing`} // Add the link with the index as parameter
                                    key={index}
                                >
                                    <div className='product-container'>
                                        <Product {...product} />
                                        <img
                                            src={kartHoverImage}
                                            alt='Kart Hover'
                                            className='hover-image'
                                        />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Join />
            <Atendimento />
            <Payment />
            <Columns />
            <EndlessText />
            </div>
        </div>
    );
};
export default ProductList;
