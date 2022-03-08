import ButtonNextQuestion from '../../components/ButtonNextQuestion/ButtonNextQuestion';
import { useState } from 'react';
import Question from '../Question/Question';


function Testing({ ElementsTest }) {


    // счетчик вопрос
    const [movieCounter, setMovieCounter] = useState(0);

    // начальный стейт вопросов
    const [allQuestions, setAllQuestions] = useState([]);

    const partFiltred = (data) => data.slice(movieCounter, movieCounter + 1)

    const handleClickStart = () => {
        setAllQuestions(...allQuestions, partFiltred(ElementsTest.questions))
        setMovieCounter(movieCounter + 1);
        
    }

    const handleClickNext = () => {
        setAllQuestions(...allQuestions, partFiltred(allQuestions))
        setMovieCounter(movieCounter + 1);
    }

    // let j = 0;
    // const questions = allQuestions.map(function (el, i) {

    //     let variants = el.variants.map(function (e, i) {
    //         j++;
    //         return <div className="testing__variants">
    //             <input className="testing__variant-button" type="radio" key={"id" + j} />
    //             <label className="testing__variant-text" htmlFor={"id" + j}>{e.title}</label>
    //         </div>
    //     })

    //     return <div className="testing__container" key={el.id}>
    //         <h3 className="testing__question">{el.title}</h3>
    //         <div className="testing__container-variants">{variants}</div>
    //     </div>
    // })


    // классы кнопки ButtonNextQuestion
    const ButtonNextQuestionClassName = (
        `button-next-question ${(allQuestions.length !== 0) ? 'button-next-question_block' : ''}`
    );;

    // let questions = data.questions;






    return (
        <section className="testing">

            <div className="testing__title">{ElementsTest.testName}</div>
            <ButtonNextQuestion
                ButtonNextQuestionClassName={ButtonNextQuestionClassName}
                text="Начать тест"
                handleClick={handleClickStart}
            />
            {/* {questions} */}
            {allQuestions.map(data => {
                console.log(data.id)
              return (<Question
                key={data.id}
                questions={data}
                
              />
              )
            })}

            
            <ButtonNextQuestion
                text="Следующий вопрос"
                handleClick={handleClickNext} />
            <ButtonNextQuestion
                text="Закончить тест" />
        </section>
    );
}

export default Testing;