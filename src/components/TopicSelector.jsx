import React from "react";
import { useNavigate } from "react-router-dom";

const topics = ["Animales", "Paises", "Personas"];

const TopicSelector = () => {
    const navigate = useNavigate();

    const handleSelect = (topic) => {
        navigate(`/akinator/${topic.toLowerCase()}/game`);
    };

    return (
        <div style={styles.container}>
            {topics.map((topic) => (
                <button key={topic} style={styles.button} onClick={() => handleSelect(topic)}>
                    {topic}
                </button>
            ))}
        </div>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
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
};

export default TopicSelector;
