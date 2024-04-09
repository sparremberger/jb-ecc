import React, { useState } from "react";
import "./Home.css"; // Import the CSS file
import SearchBar from "./SearchBar"; // Adjust the import path if needed
import LargeBanner from "./LargeBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DeliveryBanner from "./DeliveryBanner"; // Import the DeliveryBanner component
import ProductSection from "./ProductSection";
import RandomProducts from "./RandomProducts"; // Import the RandomProducts component
import Join from "./Join";
import Atendimento from "./Atendimento";
import Payment from "./Payment";
import Columns from "./Columns";
import EndlessText from "./EndlessText";
import ProductList from "./ProductList"; // Import the ProductList component
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; // Import Link and BrowserRouter

import vendasImage from "../resources/vendas.jpg";
import vendasImage2 from "../resources/vendas2.jpg";

import produto1 from "../resources/produtos/1.jpg";
import produto2 from "../resources/produtos/2.jpg";
import produto3 from "../resources/produtos/3.png";
import produto4 from "../resources/produtos/4.jpg";
import produto5 from "../resources/produtos/5.jpg";

import produto6 from "../resources/produtos/6.jpg";
import produto7 from "../resources/produtos/7.jpg";
import produto8 from "../resources/produtos/8.jpg";
import produto9 from "../resources/produtos/5.jpg";
import produto10 from "../resources/produtos/10.jpg";
import produto11 from "../resources/produtos/11.jpg";

import dispensador from "../resources/icons/dispensador.png";
import descartavel from "../resources/icons/descartavel.png";
import saco from "../resources/icons/saco.png";
import lixeira from "../resources/icons/lixeira.png";
import limpeza from "../resources/icons/limpeza.png";
import embalagem from "../resources/icons/embalagem.png";

import pagamento from "../resources/pagamentos.png";
import reclameaqui from "../resources/reclame.png";
import siteseguro from "../resources/siteseguro.png";

const Home = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [showProducts, setShowProducts] = useState(false); // Add state for showing products
    const randomProductImages = [
        produto6,
        produto7,
        produto8,
        produto9,
        produto10,
        produto11,
    ];

    const icones = [
        dispensador,
        descartavel,
        saco,
        lixeira,
        limpeza,
        embalagem,
    ];

    const nomes = [
        "DISPENSADORES",
        "DESCARTÁVEIS",
        "SACOS DE LIXO",
        "LIXEIRAS",
        "LIMPEZA",
        "EMBALAGENS",
    ];

    const openPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const handleProductsClick = () => {
        setShowProducts(true);
    };

    return (
        <div className='home-container'>
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
            <LargeBanner />
            <DeliveryBanner image={vendasImage} />{" "}
            {/* Use the imported image */}
            <ProductSection
                title='Plásticos ABS'
                products={[
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
                ]}
            />
            <ProductSection
                title='Descartáveis'
                products={[
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
                ]}
            />
            <ProductSection
                title='Lixeiras'
                products={[
                    {
                        title: "Dispenser Poupa Copo de Café",
                        price: "$100",
                        promoPrice: "$80",
                        installments: "4x $20",
                        image: produto11,
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
                        image: produto9,
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
                        image: produto7,
                    },
                    // Add more products as needed
                ]}
            />
            <RandomProducts
                title='Produtos que podem ser do seu interesse...' // Set the title
                images={randomProductImages} // Set the images
            />{" "}
            <RandomProducts
                title='Navegue por categoria:' // Set the title
                images={icones} // Set the images
                productNames={nomes}
            />
            {/* Use the RandomProducts component */}
            <DeliveryBanner image={vendasImage2} />{" "}
            {/* Use the imported image */}
            <Join />
            <Atendimento />
            <Payment />
            <Columns />
            <EndlessText />
            {isPopupOpen && (
                <div className='popup'>
                    {/* Popup content */}
                    <div className='popup-content'>
                        <button className='close-button' onClick={closePopup}>
                            X
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
