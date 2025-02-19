import React from 'react';
import { useParams } from 'react-router-dom';

import Question from '../components/Question';
import AnswerForm from '../components/AnswerForm';

const Game = () => {
    const { topic } = useParams(); // Acceder al parámetro 'topic' de la URL

    return (
        <div>
            <h1>Juego sobre el tema: {topic}</h1>
            <Question />
            <AnswerForm></AnswerForm>
        </div>
    );
}

export default Game;
