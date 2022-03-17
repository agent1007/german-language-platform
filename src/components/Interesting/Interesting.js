import { Link, Route, useRouteMatch } from 'react-router-dom';
import spb from '../../images/spb.jpg';
import add from '../../images/add.png';



function Interesting() {

    const { path, url } = useRouteMatch();

    return (
        <section className="interesting">

            <div className="interesting__containers">
                <div className="interesting__container">
                    <Link to="/city"><img className="interesting__image" src={spb} alt="Санкт-Петербург" /></Link>
                    <div className="interesting__row">
                        <h2 className="interesting__title" >Санкт-Петербург</h2>
                        <div className="interesting__buttons">
                            <button type="button" className="interesting__button" />
                            <div className="interesting__like-numbers" >5</div>
                        </div>
                    </div>
                    <p className="interesting__author">Черкасова Яна </p>
                    <button type="button" className="interesting__delete-button" />
                </div>
                <div className="interesting__container">
                    <img className="interesting__image" src={spb} alt="Санкт-Петербург" />
                    <div className="interesting__row">
                        <h2 className="interesting__title" >Санкт-Петербург</h2>
                        <div className="interesting__buttons">
                            <button type="button" className="interesting__button" />
                            <div className="interesting__like-numbers" >5</div>
                        </div>
                    </div>
                    <p className="interesting__author">Черкасова Яна </p>
                    <button type="button" className="interesting__delete-button" />
                </div>
                <div className="interesting__container">
                    <img className="interesting__image" src={spb} alt="Санкт-Петербург" />
                    <div className="interesting__row">
                        <h2 className="interesting__title" >Санкт-Петербург</h2>
                        <div className="interesting__buttons">
                            <button type="button" className="interesting__button" />
                            <div className="interesting__like-numbers" >5</div>
                        </div>
                    </div>
                    <p className="interesting__author">Черкасова Яна </p>
                    <button type="button" className="interesting__delete-button" />
                </div>
                <div className="interesting__container">
                    <img className="interesting__image" src={spb} alt="Санкт-Петербург" />
                    <div className="interesting__row">
                        <h2 className="interesting__title" >Санкт-Петербург</h2>
                        <div className="interesting__buttons">
                            <button type="button" className="interesting__button" />
                            <div className="interesting__like-numbers" >5</div>
                        </div>
                    </div>
                    <p className="interesting__author">Черкасова Яна </p>
                    <button type="button" className="interesting__delete-button" />
                </div>
                <div className="interesting__container">
                    <img className="interesting__image" src={spb} alt="Санкт-Петербург" />
                    <div className="interesting__row">
                        <h2 className="interesting__title" >Санкт-Петербург</h2>
                        <div className="interesting__buttons">
                            <button type="button" className="interesting__button" />
                            <div className="interesting__like-numbers" >5</div>
                        </div>
                    </div>
                    <p className="interesting__author">Черкасова Яна </p>
                    <button type="button" className="interesting__delete-button" />
                </div>
                <div className="interesting__container">
                    <img className="interesting__image" src={spb} alt="Санкт-Петербург" />
                    <div className="interesting__row">
                        <h2 className="interesting__title" >Санкт-Петербург</h2>
                        <div className="interesting__buttons">
                            <button type="button" className="interesting__button" />
                            <div className="interesting__like-numbers" >5</div>
                        </div>
                    </div>
                    <p className="interesting__author">Черкасова Яна </p>
                    <button type="button" className="interesting__delete-button" />
                </div>
                <div className="interesting__container">
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