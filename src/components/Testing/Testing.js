import ButtonsTest from '../../components/ButtonsTest/ButtonsTest';
import { useState, useEffect } from 'react';
import Question from '../Question/Question';


function Testing({ ElementsTest }) {

    // начальный стейт вопросов
    const [allQuestions, setAllQuestions] = useState([]);
    // счетчик вопросов
    const [questionCounter, setQuestionCounter] = useState(0);
    // начальный стейт отображенных вопросов
    const [displayAllQuestions, setDisplayAllQuestions] = useState([]);

    useEffect(() => {
        setAllQuestions(ElementsTest.questions.map((el) => {
            return el;
        }))
    }, [])

    const partFiltred = (data) => data.slice(questionCounter, questionCounter + 1);

    const handleClick = () => {
        setDisplayAllQuestions(partFiltred(allQuestions))
        setQuestionCounter(questionCounter + 1);
    }




    // const handleClickNext = () => {
    //     setDisplayAllQuestions(partFiltred(allQuestions))
    //     setQuestionCounter(questionCounter + 1);
    // }







    // классы кнопки ButtonNextQuestion
    const ButtonStartTestClassName = (
        `buttons-test ${(displayAllQuestions.length !== 0) ? 'buttons-test_block' : ''}`
    );;
    const ButtonNextQuestionClassName = (
        `buttons-test ${(((allQuestions[allQuestions.length - 1] || 0) === (displayAllQuestions[displayAllQuestions.length - 1] || 0)) || (displayAllQuestions.length === 0)) ? 'buttons-test_block' : ''}`
    );;
    const ButtonFinishTestClassName = (
        `buttons-test ${((allQuestions[allQuestions.length - 1] || 0) !== (displayAllQuestions[displayAllQuestions.length - 1] || 0)) ? 'buttons-test_block' : ''}`
    );;

    return (
        <section className="testing">

            <div className="testing__title">{ElementsTest.testName}</div>
            <ButtonsTest
                ButtonClassName={ButtonStartTestClassName}
                text="Начать тест"
                handleClick={handleClick}
            />
            <div className="testing__container">
                {displayAllQuestions.map(data => {
                    return (<Question
                        key={data.id}
                        questions={data}
                    />
                    )
                })}
            </div>

            <ButtonsTest
                text="Следующий вопрос"
                handleClick={handleClick}
                ButtonClassName={ButtonNextQuestionClassName} />
            <ButtonsTest
                text="Закончить тест"
                ButtonClassName={ButtonFinishTestClassName} />
        </section>
    );
}

export default Testing;