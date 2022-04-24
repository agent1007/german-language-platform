
function Question({ questions, setCheck }) {
    
    function choiceResponse(id) {
        const res = questions.variants;
        const user = res.find((el) => el.id === id)
        setCheck('flag' in user ? true : false)
    }

    return (
        <div className="testing__container">
            <h3 className="testing__question">Как переводиться {questions.title}</h3>
            <div className="testing__container-variants">
                {questions.variants.map(data => {
                    return <div className="testing__variants" key={data.id}>
                        <input className="testing__variant-button" type="radio" name="name" onClick={() => choiceResponse(data.id)} />
                        
                        <label className="testing__variant-text" htmlFor={data.id}>{data.title}</label>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Question;
