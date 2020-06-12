import React from "react";
import InputValues from "./components/inputForm/InputValues";
import ResultTable from "./components/MatrixTable/ResultTable";
import { Provider } from 'react-redux';
import store from './redux/store'


function App() {
  return (
    <>
    <Provider store={store}>
    <InputValues />
    </Provider>
    </>
  );
}

export default App;
