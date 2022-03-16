import { useState } from 'react';
import { Route } from 'react-router-dom';

import Header from '../Header/header';
import Navigation from '../Navigation/Navigation';
import Promo from '../Promo/Promo';
import Reasons from '../Reasons/Reasons';
import Testing from '../Testing/Testing';
import Interesting from '../Interesting/Interesting';
import CityCard from '../CityCard/CityCard';
import Footer from '../Footer/Footer';
import ElementsTest from '../ElementsTest/ElementsTest';


import ImagePopup from '../Popup/ImagePopup';
import ElementsReasons from '../ElementsReasons/ElementsReasons';



function App() {



  // стейт элементов для ImapePopup
  const [selectedElement, setSelectedElement] = useState(false);


  function handleElementClick(element) {
    setSelectedElement(element);
    console.log(selectedElement)
  }

  // функция закрытия любого попапа
  function closeAllPopups() {
    setSelectedElement(false);
  }



  return (
    <div className="App">
      <div className="body">

        <div className="page">
          <Header />
          <Navigation />
          <Route exact path="/">
            <Promo />
            <Reasons
              ElementsReasons={ElementsReasons}
              onElementClick={handleElementClick}
            />
          </Route>
          <Route path="/testing">
            <Testing
              ElementsTest={ElementsTest} />
          </Route>
          <Route path="/interesting">
            <Interesting />
          </Route>
          <Route path="/city">
                <CityCard />
            </Route>
        </div>
        <Footer />

        <ImagePopup
          card={selectedElement}
          onClose={closeAllPopups}
        />


      </div>





    </div>
  );
}

export default App;
