function Testing({ data }) {

    

    let questions = data.questions;
    let j = 0;
    
    // checkQuestions(x) {
    //     alert(x)
    // };

    questions = questions.map(function (el, i) {
        let variants = el.variants.map(function (e, i) {
            j++;
            return <div className="testing__variants">
                <input className="testing__variant-button" type="radio" id={"id" + j} />
                <label className="testing__variant-text" for={"id" + j}>{e.title}</label>
            </div>
        })

        return <div className="testing__container">
            <h3 className="testing__question">{el.title}</h3>
            <div className="testing__container-variants">{variants}</div>
        </div>
    })

    return (
        <section className="testing">
            <div className="testing__title">{data.testName}</div>
            {questions}
            <input className="testing__submit-button"
                type="button"
                value="Проверить"
                // onClick={checkQuestions}
            />
        </section>
    );
}

export default Testing;