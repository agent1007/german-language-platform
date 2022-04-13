import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function CityCard({ card, onEditElement }) {

    const history = useHistory();
    const goBack = () => history.goBack();

    const currentUser = useContext(CurrentUserContext);
    const isOwn = card.owner === currentUser._id;
    const cardEditButtonClassName = (
        `city-card__button ${isOwn ? 'city-card__button' : 'card__delete-button_hidden'}`
    );
    return (

        <section className="city-card">
            <img className="city-card__image" src={card.link} alt="Город." />
            <div className="city-card__containers">
                <div className="city-card__container">
                    <div className="city-card__container city-card__container_row">
                        <button className="city-card__button city-card__button_block" onClick={goBack} >Назад</button>

                        <button className={cardEditButtonClassName} onClick={onEditElement}>Редактировать</button>
                    </div>
                    <h2 className="city-card__title">{card.name}</h2>
                </div>
                <div className="city-card__container city-card__container_height">
                    <p className="city-card__subtitle">{card.titleRu}</p>
                    <p className="city-card__subtitle">{card.titleDeu}</p>
                </div>
            </div>

        </section>
    );
}

export default CityCard;