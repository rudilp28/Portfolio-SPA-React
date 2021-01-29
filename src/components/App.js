import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { FaHtml5 } from "react-icons/fa";


class App extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
} 

export default App