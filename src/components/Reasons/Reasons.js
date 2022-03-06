function Reasons({ Image, onCardClick }) {

    let j = 0;
    let image = Image.map(function (e, i) {
        j++;

        function handleClick() {
            onCardClick({
                image: e.image,
                title: e.title,
                information: e.information
            })
         
        }
        return <div className="reasons__container" >
            <img className="reasons__image" src={e.image} alt={e.subtitle} id={"id" + j} onClick={handleClick}/>
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