import React, { useState } from 'react';

const questions = [
    {
        id: 1,
        question: "¿Qué es el número de Froude?",
        options: [
            "Una relación entre fuerzas de inercia y gravedad",
            "Una medida de la viscosidad del fluido",
            "La velocidad del sonido en el agua",
            "El coeficiente de rugosidad"
        ],
        correct: 0
    },
    {
        id: 2,
        question: "¿Cuál es la ecuación fundamental de la hidrostática?",
        options: [
            "Bernoulli",
            "Darcy-Weisbach",
            "P = rho * g * h",
            "Manning"
        ],
        correct: 2
    }
];

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const handleAnswer = (index) => {
        if (index === questions[currentQuestion].correct) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className="glass-panel fade-in" style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ color: '#4f46e5', textAlign: 'center', marginBottom: '2rem' }}>Quiz de Conocimientos</h2>

            {showScore ? (
                <div style={{ textAlign: 'center' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>¡Completado!</h3>
                    <p style={{ fontSize: '1.2rem' }}>Tu puntuación: {score} de {questions.length}</p>
                    <button
                        className="btn-primary"
                        onClick={() => { setCurrentQuestion(0); setScore(0); setShowScore(false); }}
                        style={{ marginTop: '1rem' }}
                    >
                        Intentar de nuevo
                    </button>
                </div>
            ) : (
                <div>
                    <div style={{ marginBottom: '1rem', color: '#6b7280' }}>
                        Pregunta {currentQuestion + 1} de {questions.length}
                    </div>
                    <h3 style={{ marginBottom: '2rem', fontSize: '1.25rem' }}>{questions[currentQuestion].question}</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleAnswer(index)}
                                style={{
                                    padding: '1rem',
                                    border: '1px solid #e5e7eb',
                                    borderRadius: '8px',
                                    background: 'white',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '1rem',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={(e) => e.target.style.background = '#f3f4f6'}
                                onMouseOut={(e) => e.target.style.background = 'white'}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Quiz;
