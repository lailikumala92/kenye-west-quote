import React from 'react'
import './App.css';
import configureStore from "../src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { useDispatch, useSelector } from 'react-redux';
import { GetQuote } from './redux/actions/Users';

const Content = () => {
  const dispatch = useDispatch()
  // const [quote, setQuote] = React.useState("");
 
  const  {quote}  = useSelector((s)=> s.Quote)

  React.useEffect(()=> {
    dispatch(GetQuote());    
  }, []);

 

  return (
    <>
    <div className="container-fluid d-flex justify-content-center">
      <div className="d-flex flex-column mt-5">
        <div>
          <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo1rT-4-v9r60q006kYCPbtAJN2gjDLGpdZA&usqp=CAU"/>  
        </div>
        <h2>Kenye-West Quote</h2>
        <div className="mt-2 mb-2" style={{fontWeight: 'bold'}}>{quote.quote}</div>
        <div className="row d-flex justify-content-center">
          <button width="30" className="rounded"
          
          >Get Quote</button>
          <button width="30" className="rounded">Add Favorite</button>
        </div>
        <span style={{width: 300, height: 1, background: "#aaa", marginTop: 30}}></span>
        <h4 className="d-flex justify-content-center mt-5">My Quotes</h4>
        <form>
          <div  className="d-flex justify-content-center mt-4">
            <input type="text" name="quote" height="5"/>
            <button type="submit" height="5" className="rounded">submit</button>
          </div>
        </form>
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
