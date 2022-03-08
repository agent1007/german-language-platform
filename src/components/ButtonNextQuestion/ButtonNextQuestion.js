function ButtonNextQuestion ({handleClick, ButtonNextQuestionClassName, text}) {
    return (
        <button type="button" className={ButtonNextQuestionClassName} onClick={handleClick}>{text}</button>
    );
}

export default ButtonNextQuestion;