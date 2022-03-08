import logo from '../../images/germany.png';
import { Link, Route } from 'react-router-dom';

function Header() {
  return (
    <>
      <Route exact path="/">
        <header className="header">
          <Link to="/">  <img src={logo} className="header__logo" alt="logo" /></Link>
          <p className="header__title">Deutsch - Das ist fantastisch.</p>
          <Link to="/testing" className="header__testing"> <button className="header__button-testing">Пройти тест</button> </Link>
          <div className="header__container">
            {/* <a className="header__button-register">Регистрация</a>
            <a className="header__button-enter">Войти</a> */}
          </div>
        </header>
      </Route>
      <Route path="/testing">
        <header className="header">
          <Link to="/">  <img src={logo} className="header__logo" alt="logo" /></Link>
          <p className="header__title">Deutsch - Das ist fantastisch.</p>
          <div className="header__container">
            {/* <a className="header__button-register">Регистрация</a>
            <a className="header__button-enter">Войти</a> */}
          </div>
        </header>
      </Route>
    </>
  );
}

export default Header;