import React, { Component } from 'react'; 
import Header from './Header';
import Carousel from './Carousel';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

class Main extends Component {
  render() {
    return (
		<div className="container-fluid">
			<Header />
			<Carousel /> 
			<About name="Nasouh Mrstani"/>
			<Contact email="nasouhmra@gmail.com"/>
			<Footer/>
		</div>
    );
  }
}

export default Main;
