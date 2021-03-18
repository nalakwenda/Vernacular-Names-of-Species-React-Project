import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { MDBBtn, MDBContainer, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCheckbox  } from 'mdb-react-ui-kit';
import Sider from './components/sidenavi';
import Routes from './Routes';

function App() {

  return (
     <>
     <Router>

     <div className="row">
      <div
        className='col-2 ' style={{overflowY:"auto", height: 700, position: "fixed" }}
      >
      <Sider/>
      </div>
      <div className='col-md-8 container'>

      <Routes/>

      </div>
      </div>

      </Router>
      </>
  );
}

export default App;
