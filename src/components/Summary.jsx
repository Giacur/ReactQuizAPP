import quizCompleteImg from '../assets/quiz-complete.png';


export default function Summary(){
    return <div id="summary">
                <img src={quizCompleteImg} alt="Trophy icon" />
                <h2>Quiz completed</h2>
                <div id="summary-stats">
                    <p>
                        <span className='number'>10%</span>
                        <span className="text">skipped</span>
                    </p>

                    <p>
                        <span className='number'>10%</span>
                        <span className="text">answerd correctly</span>
                    </p>

                    <p>
                        <span className='number'>10%</span>
                        <span className="text">answered incorrectly</span>
                    </p>

                    <ol>
                        <li>
                            <h3>question number</h3>
                            <p className='question'>question text</p>
                            <p className='uers-answer'>user's answer</p>
                        </li>
                    </ol>
                </div>
            </div>
}