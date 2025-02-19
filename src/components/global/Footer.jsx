import React from "react";

const Footer = () => {
    return (
        <div style={styles.footer}>
            <div style={styles.container}>
                <p style={styles.text}>© 2025 Todos los derechos reservados</p>
                <div style={styles.links}>
                    <a href="/about" style={styles.link}>Acerca de</a>
                    <a href="/contact" style={styles.link}>Contacto</a>
                    <a href="/privacy" style={styles.link}>Política de privacidad</a>
                </div>
            </div>
        </div>
    );
};

const styles = {
    div: {
        backgroundColor: "#282c34",
        color: "white",
        padding: "20px 0",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
    },
    container: {
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 20px",
    },
    text: {
        fontSize: "1rem",
        marginBottom: "10px",
    },
    links: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        marginTop: "10px",
    },
    link: {
        color: "white",
        textDecoration: "none",
        fontSize: "1rem",
        transition: "color 0.3s",
    },
    linkHover: {
        color: "#007bff",
    },
};

export default Footer;
