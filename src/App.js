import React from 'react'
import './App.css';
import configureStore from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { GetQuote } from './redux/actions/Users';



const Content = () => {

  const dispatch = useDispatch();
  const  {quote}  = useSelector((s)=> s.Quote);
  const [newQuote, setNewQuote] = React.useState("");

  React.useEffect(()=> {
    dispatch(GetQuote());    
  }, []);

  const handleChange = e => {
    setNewQuote(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault(e);
    console.log(newQuote)
  };
 

  return (
    <>
    <div className="containerd-flex justify-content-center">
      <div className="d-flex flex-column mt-5">
        <a className="ml-5" href="https://kanye.rest/">API SITE</a>
        <div className="d-flex justify-content-center">
          <img style={{marginTop: 60}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1rT-4-v9r60q006kYCPbtAJN2gjDLGpdZA&usqp=CAU"/>  
        </div>
        <h2 className="d-flex justify-content-center">Kenye-West Quote</h2>
        <div className="mt-2 mb-2 d-flex justify-content-center" style={{fontWeight: 'bold', fontSize: 20}}>{quote.quote}</div>
        <div className="row d-flex justify-content-center">
          <button width="30" className="rounded"
          onClick={() => dispatch(GetQuote())}
          >Get Quote</button>
          <button width="30" className="rounded">Add Favorite</button>
        </div>
        <div className="d-flex justify-content-center">
          <span style={{width: 300, height: 1, background: "#aaa", marginTop: 30}}></span>
        </div> 
        <h4 className="d-flex justify-content-center mt-5">My Quotes</h4>
        <form onSubmit={onSubmit}>
          <div  className="d-flex justify-content-center mt-4">
            <input type="text" id="textinput" onChange={handleChange} />
            <button type="submit" className="rounded">Submit</button>
          </div>
        </form>
        <h6 className="d-flex justify-content-center mt-2">{newQuote}</h6>
      </div>
    </div>
  </>
  );
};

const App = () => {
  const { store, persistor } = configureStore();
  
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content/>
      </PersistGate>
    </Provider>
  );

  
}

export default App;
