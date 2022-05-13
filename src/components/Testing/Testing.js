import ButtonsTest from '../../components/ButtonsTest/ButtonsTest';
import { useState, useCallback, useEffect } from 'react';
import Question from '../Question/Question';
import { Link, Route } from 'react-router-dom';

function Testing({ ElementsTest, ElementsTest2 }) {
    

    const [test, setTest] = useState([]);

    const [tests, setTests] = useState([ElementsTest, ElementsTest2]);

    // начальный стейт вопросов
    const [allQuestions, setAllQuestions] = useState([]);
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
        setCheck(false)
    }

    const handleClickEnd = () => {
        setResponsesCounter(check ? responsesCounter + 1 : responsesCounter)
        setDisplayAllQuestions([])
        setQuestionCounter(0)
        setFinalTest(true)
        setCheck(false)
    }

    const handleClickAgain = () => {
        setDisplayAllQuestions(partFiltred(allQuestions))
        setQuestionCounter(questionCounter + 1);
        setResponsesCounter(0)
        setResultat([''])
        setCheck(false)
        setFinalTest(false)
    }

    const outputResult = useCallback(() => {
        setResultat('Количество правильных ответов: ' + responsesCounter + ' из ' + allQuestions.length)

    }, [handleClickEnd])

    useEffect(() => {
        const data = finalTest === true ? outputResult() : ''
    }, [handleClickEnd])

    // классы кнопки ButtonNextQuestion
    const ButtonStartTestClassName = (
        `buttons-test buttons-test_margin-top ${(questionCounter !== 0) || (finalTest === true) ? 'buttons-test_block' : ''}`
    )
    const ButtonNextQuestionClassName = (
        `buttons-test buttons-test_width ${(((allQuestions[allQuestions.length - 1] || 0) === (displayAllQuestions[displayAllQuestions.length - 1] || 0)) || (displayAllQuestions.length === 0)) ? 'buttons-test_block' : ''}`
    )
    const ButtonFinishTestClassName = (
        `buttons-test buttons-test_width ${((allQuestions[allQuestions.length - 1] || 0) !== (displayAllQuestions[displayAllQuestions.length - 1] || 0)) ? 'buttons-test_block' : ''}`
    )
    const ButtonAgainTestClassName = (
        `buttons-test buttons-test_width ${(finalTest !== true) ? 'buttons-test_block' : ''}`
    )
    const testingNumberQuestion = (
        `testing__numberQuestion ${(questionCounter === 0) ? 'testing__numberQuestion_block' : ''}`
    )

    const linkNavigationClassName = (
        `navigation__title navigation__text  ${(allQuestions.length !== 0) ? 'testing__numberQuestion_block' : ''}`
    )

    function choiceTest(id) {
        const test = tests.find((item) =>
            item.id === id)
        setTest(test)
        setAllQuestions(
            test.questions.map((el) => {
                return el;
            })
        )
    }

    function backChoiceTest() {
        setTest([])
        setAllQuestions([])
        setQuestionCounter(0)
        setDisplayAllQuestions([])
        setResponsesCounter(0)
        setResultat('')
        setFinalTest(false)
    }

    return (
        <section className="testing">
            <h2 className="testing__title">{(allQuestions.length === 0) ? ("Выберите тест для прохождения:") : test.testName}</h2>
            <div className="navigation__container navigation__container_title">
                {tests.map(data => {
                    return (<Link
                        key={data.id}
                        to={`/testing/${data.route}`}
                        className={linkNavigationClassName}
                        onClick={() => choiceTest(data.id)}
                    >
                        {`- ${data.testName}` }
                    </Link>)
                })}
            </div>

            <Route exact path={`/testing/${test.route}`}>
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
                        />)
                    })}
                    <div className="testing__resultat">{resultat}</div>
                </div>
                <div className="testing__buttons">
                    <Link
                        to="/testing"
                        className="navigation__title navigation__title_margin navigation__text"
                        onClick={() => backChoiceTest()}
                    >Вернуться к выбору тестов</Link>
                    <ButtonsTest
                        text="Следующий вопрос"
                        handleClick={handleClick}
                        ButtonClassName={ButtonNextQuestionClassName} />
                    <ButtonsTest
                        text="Закончить тест"
                        handleClick={handleClickEnd}
                        ButtonClassName={ButtonFinishTestClassName} />
                    <ButtonsTest
                        text="Начать тест заново"
                        handleClick={handleClickAgain}
                        ButtonClassName={ButtonAgainTestClassName} />
                </div>
                <h4 className={testingNumberQuestion}>Вопрос {questionCounter} из {allQuestions.length}</h4>
            </Route>
        </section>
    );
}

export default Testing;