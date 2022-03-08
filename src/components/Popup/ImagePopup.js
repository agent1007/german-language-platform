function ImagePopup({card, onClose}) {
    return (
        <div className={`popup popup_type_image ${card ? 'popup_opened' : ''} `}>
            <div className="popup__container-image">
                <img className="popup__image" src={card ? card.url : '#'} alt={card ? card.title : '#'} />
                <button type="button" className="popup__close-button popup__close-button-image" onClick={onClose} />
                <h2 className="popup__image-caption">{card ? card.information : '#'}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;