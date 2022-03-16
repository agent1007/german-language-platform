import ButtonsTest from '../../components/ButtonsTest/ButtonsTest';
import { useState } from 'react';
import Question from '../Question/Question';


function Testing({ ElementsTest }) {


    // счетчик вопрос
    const [questionCounter, setQuestionCounter] = useState(0);

    // начальный стейт вопросов
    const [allQuestions, setAllQuestions] = useState([]);

    const partFiltred = (data) => data.slice(questionCounter, questionCounter + 1)


    const handleClickStart = () => {
        setAllQuestions(...allQuestions, partFiltred(ElementsTest.questions))
        setQuestionCounter(questionCounter);
        console.log(allQuestions)
        console.log(questionCounter)
        

    }

    const handleClickNext = () => {
        setAllQuestions(...allQuestions, partFiltred(ElementsTest.questions))
        setQuestionCounter(questionCounter + 2);

    }

    // классы кнопки ButtonNextQuestion
    const ButtonStartTestClassName = (
        `buttons-test ${(allQuestions.length !== 0) ? 'buttons-test_block' : ''}`
    );;
    const ButtonNextQuestionClassName = (
        `buttons-test ${(allQuestions.length === 0) ? 'buttons-test_block' : ''}`
    );;
    const ButtonFinishTestClassName = (
        `buttons-test ${(allQuestions.length < 3) ? 'buttons-test_block' : ''}`
    );;




    return (
        <section className="testing">

            <div className="testing__title">{ElementsTest.testName}</div>
            <ButtonsTest
                ButtonClassName={ButtonStartTestClassName}
                text="Начать тест"
                handleClick={handleClickStart}
            />
            <div className="testing__container">
                {allQuestions.map(data => {
                    return (<Question
                        key={data.id}
                        questions={data}
                    />
                    )
                })}

            </div>

            <ButtonsTest
                text="Следующий вопрос"
                handleClick={handleClickNext}
                ButtonClassName={ButtonNextQuestionClassName} />
            <ButtonsTest
                text="Закончить тест"
                ButtonClassName={ButtonFinishTestClassName} />
        </section>
    );
}

export default Testing;