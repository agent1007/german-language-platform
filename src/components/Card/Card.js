import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function Card(props) {

  const currentUser = useContext(CurrentUserContext);
  const isOwn = props.owner === currentUser._id;
  const cardDeleteButtonClassName = (
    `card__delete-button ${props.loggedIn ?
      (`card__delete-button ${isOwn ? 'card__delete-button' : 'card__delete-button_hidden'}`) : 'card__delete-button_hidden'}`);

  const isLiked = props.likes.some(i => i === currentUser._id);
  const cardLikeButtonClassName = (
    `card__button ${isLiked ? 'card__button_active' : ''}`
  );;
  function handleLikeClick() {
    props.onCardLike({
      likes: props.likes,
      _id: props._id
    })
  }
  function handleDeleteCardClick() {
    props.onCardDelete({
      _id: props._id
    })
  }

  return (

    <div className="interesting__container" >
      <Link to="/city"><img className="interesting__image" src={props.link} alt="Город" onClick={props.handleClick} /></Link>
      <div className="interesting__row">
        <h2 className="interesting__title" >{props.name}</h2>
        <div className="interesting__buttons">
          <button type="button" className={cardLikeButtonClassName} onClick={handleLikeClick} />
          <div className="interesting__like-numbers" >{props.likes.length}</div>
        </div>
      </div>
      <p className="interesting__author">{props.author}</p>
      <button type="button" className={cardDeleteButtonClassName} onClick={handleDeleteCardClick} />
    </div>

  )
}

export default Card;