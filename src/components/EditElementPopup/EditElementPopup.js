import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useState, useEffect, useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

function EditElementPopup(props) {

    const currentUser = useContext(CurrentUserContext);

    const [name, setName ] = useState(currentUser.name);
    const [link, setLink] = useState(currentUser.avatar);
    const [titleRu, setTitleRu] = useState(currentUser.about);
    const [titleDeu, setTitleDeu] = useState(currentUser.about);
  
    useEffect(() => {
      setName(currentUser.name);
      setLink(currentUser.avatar);
      setTitleRu(currentUser.about);
      setTitleDeu(currentUser.about);
    }, [currentUser]);
  
    function handleChangeName(e) {
      setName(e.target.value);
    }
  
    function handleChangeLink(e) {
        setLink(e.target.value);
    }

    function handleChangeTitleRu(e) {
        setTitleRu(e.target.value);
      }
    
      function handleChangeTitleDeu(e) {
        setTitleDeu(e.target.value);
      }
  
    function handleSubmit(e) {
      e.preventDefault();
      props.onUpdateCard({
        name,
        link,
        titleRu,
        titleDeu
      });
    } 

    return (
        <PopupWithForm
            name='add-card'
            title='Внести изменения'
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
                    value={name || ''}
                    onChange={handleChangeName}
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
                    value={link || ''}
                    onChange={handleChangeLink}
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
                    value={titleRu || ''}
                    onChange={handleChangeTitleRu}
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
                    value={titleDeu || ''}
                    onChange={handleChangeTitleDeu}
                />
                <span
                    id="info-title-add-card-error"
                    className="error"
                />
                <button
                    type="submit"
                    className="popup__submit-button popup__submit-button_add-card">Сохранить
                </button>
            </>
        </PopupWithForm>
    )
}

export default EditElementPopup;