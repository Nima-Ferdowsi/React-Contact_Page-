import React, { Fragment, useContext } from "react";
import Form from "./Components/Form";
import SideInfo from "./Components/SideInfo";
import Context from "./Context/Context";
import "./css/App.css";
import Modal from './Components/Modal';
const App = () => {
const context=useContext(Context)
  return (
    <Fragment>
      <div className="container">
        <div className="row">
        <SideInfo/>
       <Form/>
      {context.showModal? <Modal/>:null}
        </div>
      </div>
    </Fragment>
  );
};

export default App;
