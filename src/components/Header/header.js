import logo from '../../images/germany.png';
import { Link, Route } from 'react-router-dom';
import account from '../../images/icon-account.svg';

function Header({ onSignOut, loggedIn }) {
  return (
    <>
      {loggedIn ? (
        <header className="header">
          <Link to="/">  <img src={logo} className="header__logo" alt="logo" /></Link>
          <p className="header__title">Deutsch - Das ist fantastisch.</p>

          <div className="header__container">
            <Link to="/profile" className="header__profile">
              <img className="header__profile-image" src={account} alt="Картинка аккаунта."></img>
              <div className="header__profile-text">Аккаунт</div>
            </Link>
            <button className="header__button-enter" onClick={onSignOut}>Выйти</button>
          </div>
        </header>
      ) : (
        <header className="header">
          <Link to="/">  <img src={logo} className="header__logo" alt="logo" /></Link>
          <p className="header__title">Deutsch - Das ist fantastisch.</p>
          <div className="header__container">
            <Link to="/signup" className="header__button-register">Регистрация</Link>
            <Link to="/signin" className="header__button-enter">Войти</Link>
          </div>
        </header>
      )}
    </>
  );
}

export default Header;