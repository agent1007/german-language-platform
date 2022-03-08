function Reasons({ ElementsReasons, onElementClick }) {

    let j = 0;
    let image = ElementsReasons.map(function (e, i) {
        j++;

        function handleClick() {
            onElementClick({
                url: e.url,
                title: e.title,
                information: e.information,
                id: e.id
            })

        }
        return <div className="reasons__container" key={e.id}>
            <img className="reasons__image" src={e.url} alt={e.subtitle} id={"id" + j} onClick={handleClick} />
            <p className="reasons__subtitle">{e.title}</p>
        </div>
    })

    return (
        <section className="reasons" id="reasons">
            <h2 className='reasons__title'>8 причин изучать немецкий язык</h2>
            <div className="reasons__containers">
                {image}
            </div>
        </section>
    );
}
export default Reasons;