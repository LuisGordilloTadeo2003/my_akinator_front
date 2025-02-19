import React from "react";
import TopicSelector from "../components/TopicSelector";

const Topic = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Selecciona un Tema</h1>
            <TopicSelector />
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
};

export default Topic;
