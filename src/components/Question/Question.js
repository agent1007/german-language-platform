
function Question({ questions }) {

    return (
        <div className="testing__container">
            <h3 className="testing__question">Как переводиться  {questions.title}</h3>
            <div className="testing__container-variants">
                {questions.variants.map(data => {
                    return <div className="testing__variants" key={data.id}>
                        <input className="testing__variant-button" type="radio"  name="name"/>
                        <label className="testing__variant-text" htmlFor={data.id}>{data.title}</label>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Question;
