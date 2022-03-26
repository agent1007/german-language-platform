import promo from '../../images/Promo-image.jpg'

function Promo() {

  
    return (
            <section className="promo">
                <div className="promo__container">
                    <h1 className="promo__title">Изучайте немецкий язык с Черкасовой Яной.</h1>
                    <p className="promo__subtitle">Листайте ниже, чтобы узнать больше причин для изучения.</p>
                    {/* <a href="#reasons" className="promo__link">Узнать больше</a> */}
                </div>
                <img className="promo__image" src={promo} alt="Красотка."/>
            </section>
    );
}
  
export default Promo;