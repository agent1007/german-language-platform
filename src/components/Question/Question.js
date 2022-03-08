function Question({ questions }) {
    let j = 0;
    let variants = questions.variants.map(function (e, i) {
        j++;
        return <div className="testing__variants">
            <input className="testing__variant-button" type="radio" key={"id" + j} />
            <label className="testing__variant-text" htmlFor={"id" + j}>{e.title}</label>
        </div>
    })

    return (
        <div className="testing__container">
            <h3 className="testing__question">{questions.title}</h3>
            <div className="testing__container-variants">{variants}</div>
        </div>
    );
}

export default Question;
