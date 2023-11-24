import { useCallback, useState } from "react";
import QUESTIONS from '../questions.js';
import QuestionTimer from "./QuestionTimer.jsx";
import Answers from "./Answers.jsx";
import Question from "./Question.jsx";

export default function Quiz(){
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
        setUserAnswers(prevUserAnswer => {
            return [
                ...prevUserAnswer,
                selectedAnswer,
            ];
        });
    }, [])
    
    
    if (quizIsComplete){
        return 
    }

    const handleSkipAnswer  = useCallback(()=>handleSelectAnswer(null), [handleSelectAnswer])

    

    return  <>
                <div id="quiz">
                    <Question 
                    key={activeQuestionIndex}
                    index={activeQuestionIndex}
                    answers={QUESTIONS[activeQuestionIndex].answers}
                    onSelectAnswer={handleSelectAnswer}
                    onSkipAnswer={handleSkipAnswer} />
                </div>
            </>
}