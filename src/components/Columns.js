import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Columns.css"; // Import the CSS file for styling

const Column = ({ title, links }) => (
    <div className='column'>
        <h3 className='column-title'>{title}</h3>
        <ul className='link-list'>
            {links.map((link, index) => (
                <li key={index} className='link-item'>
                    {link}
                </li>
            ))}
        </ul>
    </div>
);

const Columns = () => {
    const categoriesLinks = [
        "Descartáveis",
        "Papéis",
        "Dispensadores",
        "Higiene e Limpeza",
        "Sacos de Lixo / Lixeiras",
        "Segurança",
        "EPI´s",
        "Lançamentos",
        "Promoções",
    ];

    const institucionalLinks = [
        "Fale Conosco",
        "JB Embalagens",
        "Biodegradáveis",
        "Promova sua marca, personalize!",
        "Política de Entrega",
    ];

    return (
        <div className='columns'>
            <Column title='Categorias' links={categoriesLinks} />
            <Column title='Institucional' links={institucionalLinks} />
            <Column title='Siga-nos nas redes' links={[]} />
            <div className='social-icons'>
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
            </div>
        </div>
    );
};

export default Columns;
