import { useState, useEffect, useCallback } from 'react';
import { Redirect, Route, Switch, useHistory } from 'react-router-dom';


import Header from '../Header/header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import Reasons from '../Reasons/Reasons';
import Testing from '../Testing/Testing';
import Interesting from '../Interesting/Interesting';
import CityCard from '../CityCard/CityCard';
import ResultatsTest from '../ResultatsTest/ResultatsTest';

import Footer from '../Footer/Footer';
import ElementsTest from '../../utils/constans/Tests/ElementsTest';
import ElementsTest2 from '../../utils/constans/Tests/ElementsTest2';
import ElementsInteresting from '../../utils/constans/ElementsInteresting';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Profile from '../Profile/Profile';
import Users from '../Users/Users';
import * as auth from '../../utils/auth';
import api from '../../utils/api';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import ImagePopup from '../Popup/ImagePopup';
import AddElementPopup from '../AddElementPopup/AddElementPopup';
import EditElementPopup from '../EditElementPopup/EditElementPopup';
import ElementsReasons from '../../utils/constans/ElementsReasons';



function App() {

  const initialData = {
    email: '',
    password: ''
  }
  const [loggedIn, setLoggedIn] = useState(false);
  const [data, setData] = useState(initialData)
  const [success, setSuccess] = useState(false)
  const history = useHistory();
  const [isInfoTooltip, setIsInfoTooltip] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  // const [currentCard, setCurrentCard] = useState({});
  const [cards, setCards] = useState([]);
  // стейт элементов для AddElementPopup
  const [isAddElementPopupOpen, setIsAddElementPopupOpen] = useState(false);
  // стейт элементов для EditElementPopup
  const [isEditElementPopupOpen, setIsEditElementPopupOpen] = useState(false);

  const [resultats, setResultats] = useState([]);


  const [users, setUsers] = useState([]);

  





  function handleAddElementClick() {
    setIsAddElementPopupOpen(true);
  }
  function handleEditElementClick() {
    setIsEditElementPopupOpen(true);
  }

  // стейт элементов для ImapePopup
  const [selectedElement, setSelectedElement] = useState(false);
  function handleElementClick(element) {
    setSelectedElement(element);
  }


  // стейт элементов для ImapePopup
  const [cityCard, setCityCard] = useState({});
  function handlCityCardClick(element) {
    setCityCard(element);
  }


  function handleUpdateUser(data) {
    api.editProfile(data)
      .then(data => {
        let card = cards.find(e => e._id === data._id)
        setCards(card);
      }
      )
      .catch(err => console.log(err))
  }


  // функция закрытия любого попапа
  function closeAllPopups() {
    setSelectedElement(false);
    setIsInfoTooltip(false);
    setIsAddElementPopupOpen(false);
    setIsEditElementPopupOpen(false)
  }


  function handleAddElementSubmit(data) {
    api.addCard(data)
      .then(newCard => {
        setCards([newCard, ...cards]);
        closeAllPopups()
      }
      )
      .catch(err => console.log(err))
  }

  function recordResultat(data) {
    api.addResultats(data)
      .then(newResultats => {
        setResultats([newResultats, ...resultats]);
      }
      )
      .catch(err => console.log(err))
  }



  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i === currentUser._id);
    const likeRequest = !isLiked ? api.addCardLike(card._id) : api.deleteCardLike(card._id);
    likeRequest
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    api.removeCard(card)
      .then(() => {
        const newCards = cards.filter((data) => { return card._id !== data._id });
        setCards(newCards);
      })
      .catch(err => console.log(err))
  }

  function handleUpdateCard(card) {
    api.editCard(card)
      .then(data => {
        setCurrentUser(data);
      }
      )
      .catch(err => console.log(err))
  }




  const tokenCheck = useCallback(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.getUserData(jwt)
        .then((res) => {
          if (res) {
            setData({
              email: res.email,
            })
            setLoggedIn(true);
            // history.push('/')
          }
        })
        .catch((res) => {
          history.push('/signin')
        })
    }

  }, [history])

  useEffect(() => {
    tokenCheck();
  }, [tokenCheck])

  const handleRegister = ({ email, name, password }) => {
    return auth.register(email, name, password)
      .then((res) => {
        setSuccess(true);
        setIsInfoTooltip(true);
        history.push('/signin');
        return res;
      })
      .catch(err => {
        setIsInfoTooltip(true);
        history.push('/signup');
        setSuccess(false);
      })
  }

  const handleLogin = ({ email, password }) => {
    return auth.login(email, password).then(res => {
      if (!res || res.statusCode === 400) throw new Error('Что-то пошло не так');
      if (res.token) {
        setData({ email })
        localStorage.setItem('jwt', res.token);
        setLoggedIn(true);
      };
    });

  }
  const handleSignOut = () => {
    localStorage.removeItem('jwt');
    setData(initialData);
    setLoggedIn(false);
    setCards([])
    history.push('/signin');
  }


  useEffect(() => {
    if (loggedIn) {
      api.getUserData()
        .then(data => {
          setCurrentUser(data);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn])

  useEffect(() => {
    if (loggedIn) {
      api.getResultats()
        .then(res => {
          setResultats(res);
        })
        .catch(err => console.log(err))
    }
  }, [loggedIn])

  useEffect(() => {
    if (loggedIn) {
      api.getInitialCards()
        .then(res => {
          setCards(res)
        })
        .catch(err => console.log(err))
    }
    else {
      setCards(ElementsInteresting)
    }
  }, [loggedIn])

  useEffect(() => {
    api.getUsers()
        .then(res => {
            setUsers(res)
        })
        .catch(err => console.log(err))
}, [])

useEffect(() => {
  api.getResultats()
      .then(res => {
          setResultats(res)
      })
      .catch(err => console.log(err))
}, [])
// console.log(resultats)
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="body">

          <div className="page">
            <Header
              onSignOut={handleSignOut}
              loggedIn={loggedIn} />
            <Navigation />
            <Switch>

              <Route exact path="/">
                <Promo />
                <Reasons
                  ElementsReasons={ElementsReasons}
                  onElementClick={handleElementClick}
                />
              </Route>
              <Route path="/testing">
                <Testing
                  ElementsTest={ElementsTest}
                  ElementsTest2={ElementsTest2}
                  recordResultat={recordResultat}
                />
              </Route>
              <Route path="/interesting">
                <Interesting
                  onAddElement={handleAddElementClick}
                  onCardLike={handleCardLike}
                  onCardDelete={handleCardDelete}
                  cards={cards}
                  onCityCardClick={handlCityCardClick}
                  loggedIn={loggedIn}
                />
              </Route>
              <Route path="/city">
                <CityCard
                  card={cityCard}
                  onEditElement={handleEditElementClick}
                  loggedIn={loggedIn}
                />
              </Route>

              <Route path="/profile">
                <Profile
                  onUpdateUser={handleUpdateUser} />
              </Route>

              <Route path="/cheloveki">
                <Users
                users={users}
                />
              </Route>

              <Route path="/resultats">
                <ResultatsTest
                  resultats={resultats}
                  setResultats={setResultats}
                  users={users}
                />
              </Route>

              <Route path="/signin">
                <Login onLogin={handleLogin} tokenCheck={tokenCheck} />
              </Route>

              <Route path="/signup">
                <Register onRegister={handleRegister} />
              </Route>

              <Route>
                {loggedIn ? <Redirect to='/' /> : <Redirect to='/signin' />}
              </Route>

            </Switch>
          </div>
          <Footer />

          <AddElementPopup
            isOpen={isAddElementPopupOpen}
            onClose={closeAllPopups}
            onAddElement={handleAddElementSubmit} />
          <EditElementPopup
            isOpen={isEditElementPopupOpen}
            onClose={closeAllPopups}
            onUpdateCard={handleUpdateCard} />
          <ImagePopup
            card={selectedElement}
            onClose={closeAllPopups}

          />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
