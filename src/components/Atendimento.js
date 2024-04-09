import React from "react";
import "./Atendimento.css"; // Import the CSS file for styling

const Atendimento = () => {
    return (
        <div className="atendimento">
            <h2 className="atendimento-title">Atendimento</h2>
            <h3 className="atendimento-subtitle">
                Horário de Atendimento <br />
                seg a sex das 8:15 às 12h - 13:20 às 18h <br />
                sábado e domingo - fechado
            </h3>
            <div className="button-group">
                <button className="atendimento-button">
                    Telefone: (51) 3595-7639
                </button>
                <button className="atendimento-button">
                    Whatsapp: (51) 99100-5762
                </button>
                <button className="atendimento-button">
                    E-mail: contato@jbembalagens.com.br
                </button>
            </div>
        </div>
    );
};

export default Atendimento;
