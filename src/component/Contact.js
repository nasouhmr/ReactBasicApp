import React, { Component } from 'react';


class Contact extends Component {
  render() {
    return (
		<section id="Contact" className="even">
			<div className="row">
				<div className="col-md-12 text-center">
					<h2 className="page-header">Contact Me</h2>
					<p>{this.props.email}</p>
				</div>
			</div>
		</section>
    );
  }
}

export default Contact;
