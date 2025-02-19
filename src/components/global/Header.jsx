import React from "react";
import { Link } from "react-router-dom"; // Si usas React Router para navegación

// Estilos básicos para el Header
const headerStyle = {
    backgroundColor: "#282c34", // Fondo oscuro
    color: "#fff",              // Color de texto blanco
    padding: "10px 20px",       // Espaciado alrededor del contenido
    textAlign: "center",        // Centrar el texto
    fontFamily: "'Roboto', sans-serif", // Fuente moderna
};

const logoStyle = {
    width: "40px",              // Tamaño del logo
    marginRight: "10px",        // Espaciado entre el logo y el texto
};

const headerTextStyle = {
    fontSize: "24px",           // Tamaño del texto
    fontWeight: "bold",         // Negrita para el título
};

const navStyle = {
    marginTop: "15px",          // Espaciado entre el título y la barra de navegación
};

const Header = () => {
    return (
        <div style={headerStyle}>
            <div>
                {/* <img
          src="/path_to_logo.png" // Cambia esta ruta al logo de Akinator
          alt="Akinator Logo"
          style={logoStyle}
        /> */}
                <span style={headerTextStyle}>Akinator - El Adivinador</span>
            </div>
            <div style={navStyle}>
                <Link to="/" style={{ color: "#fff", margin: "0 15px" }}>
                    Home
                </Link>
                <Link to="/play" style={{ color: "#fff", margin: "0 15px" }}>
                    Jugar
                </Link>
                <Link to="/about" style={{ color: "#fff", margin: "0 15px" }}>
                    Acerca de
                </Link>
            </div>
        </div>
    );
};

export default Header;
