import spb from '../../images/spb.jpg';
import { Link, useHistory } from 'react-router-dom';
function CityCard() {

    const history = useHistory();
    const goBack = () => history.goBack();

    return (

        <section className="city-card">
            <img className="city-card__image" src={spb} alt="Красотка." />
            <div className="city-card__containers">
                <div className="city-card__container">
                    <div className="city-card__container city-card__container_row">
                        <button className="city-card__button" onClick={goBack} >Назад</button>
                        <button className="city-card__button">Редактировать</button>
                    </div>
                    <h2 className="city-card__title">Санкт-Петербург</h2>
                </div>
                <div className="city-card__container city-card__container_height">
                    <p className="city-card__subtitle">Санкт-Петербург - второй по величине город России. Он был основан 16 мая 1703 года при Петре I, когда после победы над шведами он решил заложить на Заячьем острове Петропавловскую крепость. С 18 века по начало 20 века Санкт-Петербург был столицей России.</p>
                    <p className="city-card__subtitle">St. Petersburg ist die zweitgrößte Stadt Russlands. Es wurde am 16. Mai 1703 unter Peter I. gegründet, als er nach dem Sieg über die Schweden beschloss, eine Peter-Paul-Festung auf der Haseninsel zu verlegen. Vom 18. Jahrhundert bis zum Beginn des 20. Jahrhunderts war St. Petersburg die Hauptstadt Russlands.</p>
                </div>
            </div>

        </section>
    );
}

export default CityCard;