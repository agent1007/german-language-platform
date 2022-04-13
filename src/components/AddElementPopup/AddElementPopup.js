import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useRef } from 'react';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function AddElementPopup(props) {

  const currentUser = useContext(CurrentUserContext);
  const nameRef = useRef();
  const titleRuRef = useRef();
  const titleDeuRef = useRef();
  const linkRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddElement({
      name: nameRef.current.value,
      author: currentUser.name,
      titleRu: titleRuRef.current.value,
      titleDeu: titleDeuRef.current.value,
      link: linkRef.current.value
    });
    nameRef.current.value = '';
    titleRuRef.current.value = '';
    titleDeuRef.current.value = '';
    linkRef.current.value = '';
  }

  return (
    <PopupWithForm
      name='add-card'
      title='Добавь свой город'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}  >
      <>
        <input
          type="text"
          required
          minLength={2}
          maxLength={30}
          className="popup__info popup__info_title popup__info_title-add-card"
          placeholder="Название города"
          name="name"
          id="info-title-add-card"
          ref={nameRef}

        />
        <span
          id="info-title-add-card-error"
          className="error"
        />
        <input
          type="url"
          required
          className="popup__info popup__info_subtitle popup__info_subtitle-add-card"
          placeholder="Ссылка на картинку"
          name="link"
          id="info-subtitle-add-card"
          ref={linkRef}

        />
        <span
          id="info-subtitle-add-card-error"
          className="error"
        />
        <input
          type="text"
          required
          minLength={1}
          maxLength={400}
          className="popup__info popup__info_title popup__info_title-add-card"
          placeholder="Описание города на русском языке"
          name="titleRu"
          id="info-title-add-card"
          ref={titleRuRef}
        />
        <span
          id="info-title-add-card-error"
          className="error"
        />
        <input
          type="text"
          required
          minLength={1}
          maxLength={400}
          className="popup__info popup__info_title popup__info_title-add-card"
          placeholder="Описание города на немецком языке"
          name="titleDeu"
          id="info-title-add-card"
          ref={titleDeuRef}
        />
        <span
          id="info-title-add-card-error"
          className="error"
        />


        <button
          type="submit"
          className="popup__submit-button popup__submit-button_add-card">Создать
        </button>
      </>
    </PopupWithForm>
  )
}

export default AddElementPopup;