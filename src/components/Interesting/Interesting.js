import add from '../../images/add.png';
import Card from '../Card/Card';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useContext } from 'react';

function Interesting({ onAddElement, cards, onCardLike, onCardDelete, onCityCardClick }) {
    const currentUser = useContext(CurrentUserContext);
    return (
        <section className="interesting">

            <div className="interesting__containers">
                {cards.map(item => {
                    function handleClick() {
                        onCityCardClick({
                            link: item.link,
                            name: item.name,
                            titleRu: item.titleRu,
                            titleDeu: item.titleDeu,
                            owner: item.owner,
                        })
                    }
                    return (<Card
                        key={item._id}
                        {...item}
                        onCardLike={onCardLike}
                        onCardDelete={onCardDelete}
                        currentUser={currentUser}
                        handleClick={handleClick}
                    />)
                })}
                <div className="interesting__container interesting__container_cursor" onClick={onAddElement}>
                    <img className="interesting__image interesting__image_size" src={add} alt="Добавить еще" />
                    <div className="interesting__row">
                        <h2 className="interesting__title interesting__title_wrap" >Раскажи про свой город</h2>
                    </div>
                    <p className="interesting__author">Твое имя</p>
                </div>

            </div>


        </section>
    );
}

export default Interesting;