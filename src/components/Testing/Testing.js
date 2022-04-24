import ButtonsTest from '../../components/ButtonsTest/ButtonsTest';
import { useState, useCallback, useEffect } from 'react';
import Question from '../Question/Question';


function Testing({ ElementsTest }) {

    const data = ElementsTest.questions.map((el) => {
        return el;
    })
    // начальный стейт вопросов
    const [allQuestions, setAllQuestions] = useState(data);
    // счетчик вопросов
    const [questionCounter, setQuestionCounter] = useState(0);
    // начальный стейт отображенных вопросов
    const [displayAllQuestions, setDisplayAllQuestions] = useState([]);
    // счетчик правильных ответов
    const [responsesCounter, setResponsesCounter] = useState(0);
    // стейт результатов
    const [resultat, setResultat] = useState(['']);

    const [check, setCheck] = useState(false)

    const [finalTest, setFinalTest] = useState(false)

    const partFiltred = (data) => data.slice(questionCounter, questionCounter + 1);

    const handleClick = () => {
        setDisplayAllQuestions(partFiltred(allQuestions))
        setQuestionCounter(questionCounter + 1);
        setResponsesCounter(check ? responsesCounter + 1 : responsesCounter)
    }

    const handleClickEnd = () => {
        setResponsesCounter(check ? responsesCounter + 1 : responsesCounter)
        setDisplayAllQuestions([])
        setFinalTest(true)
    }

    const outputResult = useCallback(() => {
        setResultat('Количество правильных ответов: ' + responsesCounter + ' из ' + allQuestions.length)

    }, [handleClickEnd])

    useEffect(() => {
        const data = (finalTest === true ? outputResult() : '')

    }, [handleClickEnd])
    // классы кнопки ButtonNextQuestion
    const ButtonStartTestClassName = (
        `buttons-test ${(questionCounter !== 0) ? 'buttons-test_block' : ''}`
    );
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
                        setCheck={setCheck}
                    />
                    )
                })}
                {resultat}
            </div>

            <ButtonsTest
                text="Следующий вопрос"
                handleClick={handleClick}
                ButtonClassName={ButtonNextQuestionClassName} />
            <ButtonsTest
                text="Закончить тест"
                handleClick={handleClickEnd}
                ButtonClassName={ButtonFinishTestClassName} />
        </section>
    );
}

export default Testing;