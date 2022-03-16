import { Link, Route, useRouteMatch } from 'react-router-dom';
import spb from '../../images/spb.jpg';



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

            </div>

            
        </section>
    );
}

export default Interesting;