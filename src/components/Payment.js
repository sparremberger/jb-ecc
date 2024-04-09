import React from "react";
import "./Payment.css"; // Import the CSS file for styling
import pagamento from "../resources/pagamentos.png";
import reclameaqui from "../resources/reclame.png";
import siteseguro from "../resources/siteseguro.png";

const Groupie = ({ title, images }) => (
  <div className="groupie">
    <div className="title">{title}</div>
    <div className="image-container">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} />
      ))}
    </div>
  </div>
);

const Payment = () => {
  const formasDePagamentoImages = [pagamento];
  const segurancaECertificacoesImages = [reclameaqui, siteseguro];

  return (
    <div className="payment">
      <Groupie title="" images={formasDePagamentoImages} />
      <Groupie
        title=""
        images={segurancaECertificacoesImages}
      />
    </div>
  );
};

export default Payment;
