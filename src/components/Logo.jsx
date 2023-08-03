import React from "react";
import '../styles/Logo.css';
import listaDeTareasLogo from '../images/listatareas-logo.png';

function Logo() {
    return (
        <div className='logo-contenedor'>
            <img 
                className='logo'
                src={ listaDeTareasLogo }
                alt='Logo de la app'
            />
        </div>
    );
}

export default Logo;
