import Header from '../Header/header';
import Promo from '../Promo/Promo';
import Reasons from '../Reasons/Reasons';
import Testing from '../Testing/Testing';
import Footer from '../Footer/Footer';
import data from '../Data/data';



function App() {
  return (
    <div className="App">
      <div className="body">

        <div className="page">
          {/* <Header />
          <Promo />
          <Reasons /> */}

          <Testing 
          data={data}/>


        </div>
        {/* <Footer /> */}
      </div>





    </div>
  );
}

export default App;
