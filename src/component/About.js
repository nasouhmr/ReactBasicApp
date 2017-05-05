import React, { Component } from 'react'; 

class About extends Component {
  render() {
    return (
		<section id="About" className="odd">
			<div className="row">
				<div className="col-md-12 text-center">
					<h2 className="page-header">React Basic App</h2>
					<p>By {this.props.name}</p>
				</div>
			</div>
		</section>
    );
  }
}

export default About;
