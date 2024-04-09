import React from "react";
import "./Join.css"; // Import the CSS file for styling

const Join = () => {
    return (
        <div className='join'>
            <h2 className='join-title'>
                Cadastre-se agora e receba nossas{" "}
                <span className='bold'>ofertas</span>
            </h2>
            <div className='join-form'>
                <div className='input-group'>
                    <input type='text' placeholder='Digite aqui seu nome' />
                    <input type='email' placeholder='Digite aqui seu e-mail' />
                    <input
                        type='tel'
                        placeholder='Digite aqui seu telefone (opcional)'
                    />
                    <input
                        type='text'
                        placeholder='Digite aqui outra informação (opcional)'
                    />
                    <button className='join-button'>ENVIAR</button>
                </div>
            </div>
        </div>
    );
};

export default Join;
