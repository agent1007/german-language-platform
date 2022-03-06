import Header from '../Header/header';
import Promo from '../Promo/Promo';
import Reasons from '../Reasons/Reasons';
import Testing from '../Testing/Testing';
import Footer from '../Footer/Footer';
import data from '../Data/data';

import { useState, useEffect, useCallback } from 'react';
import ImagePopup from '../Popup/ImagePopup';
import Image from '../Image/Image';



function App() {

  const [selectedCard, setSelectedCard] = useState(false);


  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function closeAllPopups() {
    setSelectedCard(false);
  }



  return (
    <div className="App">
      <div className="body">

        <div className="page">
          <Header />
          {/* <Promo />
          <Reasons
            Image={Image}
            onCardClick={handleCardClick}
          /> */}

          <Testing 
          data={data}/>


        </div>
        <Footer />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />


      </div>





    </div>
  );
}

export default App;
