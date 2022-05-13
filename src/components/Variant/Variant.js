function Variant({ data, setCheck }) {

    const choiceResponse = () => {
        setCheck('flag' in data ? true : false)
    }
    
    return (
        <div className="testing__variant">
            <input className="testing__variant-button" type="radio" name="name" onClick={choiceResponse} />
            <label className="testing__variant-text" htmlFor={data.id}>{data.title}</label>
        </div>
    );
}

export default Variant;