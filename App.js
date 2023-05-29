import React, { useState, useEffect } from 'react';
import './index.css';

const CardGame = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      id: 1,
      question: 'How do you pronounce "Apple"?',
      options: ['/ˈæpəl/', '/ˈbænənə/', '/ˈæpl/', '/ˈɔrɪndʒ/'],
      correctOption: '/ˈæpəl/'
    },
    {
      id: 2,
      question: 'How do you pronounce "Banana"?',
      options: ['/bəˈnænə/', '/ˈæpəl/', '/ˈɡreɪps/', '/ˈɔrɪndʒ/'],
      correctOption: '/bəˈnænə/'
    },
    {
      id: 3,
      question: 'How do you pronounce "Grapes"?',
      options: ['/ˈæpəl/', '/ˈbænənə/', '/ˈɡreɪps/', '/ˈæprəs/'],
      correctOption: '/ˈɡreɪps/'
    },
    {
      id: 4,
      question: 'How do you pronounce "Orange"?',
      options: ['/ˈæpəl/', '/bəˈnænə/', '/ˈɡreɪps/', '/ˈɔrɪndʒ/'],
      correctOption: '/ˈɔrɪndʒ/'
    },
    {
      id: 5,
      question: 'How do you pronounce "Strawberry"?',
      options: ['/ˈstrəwˌbɛri/', '/ˈbænənə/', '/ˈɡreɪps/', '/ˈɔrɪndʒ/'],
      correctOption: '/ˈstrɔːbəri/'
    },
    {
      id: 6,
      question: 'How do you pronounce "Watermelon"?',
      options: ['/ˈwɔːtərmɛlən/', '/ˈwətərmɛlən/', '/ˈɡreɪps/', '/ˈɔrɪndʒ/'],
      correctOption: '/ˈwɔːtərmɛlən/'
    },
    {
      id: 7,
      question: 'How do you pronounce "Pineapple"?',
      options: ['/ˈpaɪnˌæpl̩/', '/ˈpɪnəpl̩/', '/ˈɡreɪps/', '/ˈɔrɪndʒ/'],
      correctOption: '/ˈpaɪnˌæpl̩/'
    },
    {
      id: 8,
      question: 'How do you pronounce "Mango"?',
      options: ['/ˈmæŋɡoʊ/', '/ˈbænənə/', '/ˈmaŋɡoʊ/', '/ˈɔrɪndʒ/'],
      correctOption: '/ˈmæŋɡoʊ/'
    },
    {
      id: 9,
      question: 'How do you pronounce "Tomato"?',
      options: ['/təˈmeɪtoʊ/', '/təˈmɑːtoʊ/', '/ˈɡreɪps/', '/ˈɔrɪndʒ/'],
      correctOption: '/təˈmeɪtoʊ/'
    },
    {
      id: 10,
      question: 'How do you pronounce "Avocado"?',
      options: ['/ˌævəˈkɑːdoʊ/', '/əˈvɑːkədoʊ/', '/ˈɡreɪps/', '/ˈɔrɪndʒ/'],
      correctOption: '/ˌævəˈkɑːdoʊ/'
    },
  ];
  

  useEffect(() => {
    if (isFlipped) {
      const timer = setTimeout(() => {
        setIsFlipped(false);
        setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      }, 1500); // Adjust the delay as needed

      return () => clearTimeout(timer);
    }
  }, [isFlipped]);

  const handleOptionSelect = (selectedOption) => {
    const currentQuestionObj = questions[currentQuestion];
    if (selectedOption === currentQuestionObj.correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsFlipped(true);
  };

  const currentQuestionObj = questions[currentQuestion];

  return (
    <div className="container">
      <h1 className="title">Card Game</h1>
      {currentQuestionObj && (
        <div className={`card ${isFlipped ? 'card-flipped' : ''}`}>
          <div className="card-content">
            {!isFlipped && (
              <>
                <h2 className="question">{currentQuestionObj.question}</h2>
                <div className="options">
                  {currentQuestionObj.options.map((option, index) => (
                    <button
                      key={index}
                      className="option-button"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}
      <div className="score">Score: {score}</div>
    </div>
  );
};

export default CardGame;
