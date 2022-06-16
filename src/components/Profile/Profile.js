import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useEffect, useContext, useState } from 'react';
import { useFormWithValidation } from '../hooks/useForm';
import { useHistory } from 'react-router-dom';

function Profile({ onSignOut, onUpdateUser, onEditAvatar }) {
    const { values, errors, isValid, handleChange, setValues, setIsValid } = useFormWithValidation();
    const history = useHistory();
    const currentUser = useContext(CurrentUserContext);
    const [disabled, setDisabled] = useState(true);

    const handleSignOut = (e) => {
        e.preventDefault();
        onSignOut()
        history.push('/');
    }

    useEffect(() => {
        if (currentUser) {
            setValues({
                name: currentUser.name,
                email: currentUser.email,
                avatar: currentUser.avatar
            })
            setDisabled(true)
        }
    }, [currentUser]);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser(values);
        setIsValid(false);
        setDisabled(true)
    }

    function handleClick(e) {
        e.preventDefault();
        setDisabled(false)
    }

    const ProfileInputsClassName = (
        `profile__inputs ${(disabled !== true) ? 'profile__inputs_active' : ''}`
    )



    return (
        <div className="profile">
            <h2 className="profile__title">Привет, {values.name}!</h2>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form-container">
                    <img className="profile__image" src={values.avatar} alt="Аватар" onClick={onEditAvatar}/>
                    <div className={ProfileInputsClassName}>
                        <div className="profile__input-container">
                            <p className="profile__input-text">Имя</p>
                            <input
                                type="text"
                                name='name'
                                className="profile__input"
                                id="name"
                                value={values.name || ''}
                                onChange={handleChange}
                                minLength='2'
                                maxLength='40'
                                pattern='[a-zA-Zа-яА-Я -]{1,}'
                                required
                                disabled={disabled}
                            />
                            <span
                                id="name-error"
                                className="error"
                            > {errors.name || ''}</span>
                        </div>
                        <div className="profile__input-container">
                            <p className="profile__input-text">E-mail</p>
                            <input
                                type="email"
                                name='email'
                                className="profile__input"
                                id="email"
                                value={values.email || ''}
                                onChange={handleChange}
                                required
                                disabled={disabled}
                            />
                            <span
                                id="email-error"
                                className="error"
                            > {errors.email || ''}</span>
                        </div>
                    </div>
                </div>
                <div className="profile__submit-button-container">
                    <button
                        type="submit"
                        className={`profile__submit-button ${!isValid && "profile__submit-button_disabled"
                            }`}
                        disabled={!isValid}
                    >Сохранить
                    </button>
                    <button
                        type="button"
                        className={`profile__submit-button ${isValid && "profile__submit-button_disabled"
                            }`}
                            disabled={isValid}
                        onClick={handleClick}
                    >Редактировать
                    </button>
                </div>
            </form>
            <button className="profile__close-button" onClick={handleSignOut}>Выйти из аккаунта</button>
        </div>
    );
}

export default Profile;