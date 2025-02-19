import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>¡Bienvenido a Akinator!</h1>
            <Link to="/akinator/select-topic">
                <button style={styles.button}>Jugar</button>
            </Link>
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
    },
    title: {
        fontSize: "2rem",
        marginBottom: "20px",
    },
    button: {
        padding: "10px 20px",
        fontSize: "1.2rem",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background 0.3s",
    },
    buttonHover: {
        backgroundColor: "#0056b3",
    },
};

export default Home;
