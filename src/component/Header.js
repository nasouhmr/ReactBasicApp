import React, { Component } from 'react';


class Header extends Component {
  render() {
    return (
		<nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
		  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		  </button>
		  <a className="navbar-brand" href="#">ReactJs</a>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
			<ul className="navbar-nav mr-auto">
			  <li className="nav-item active">
				<a className="nav-link" href="#">Home</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#About">About</a>
			  </li>
			  <li className="nav-item">
				<a className="nav-link" href="#Contact">Contact</a>
			  </li> 
			</ul>
			<form className="form-inline my-2 my-lg-0">
			  <input className="form-control mr-sm-2" type="text" placeholder="Search" />
			  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
			</form>
		  </div>
		</nav>
    );
  }
}

export default Header;
