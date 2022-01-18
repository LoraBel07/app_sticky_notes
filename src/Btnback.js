import { Component } from "react";



class Btnback extends Component {
	state = {
		show: true
	}
	render() {
		const btnText = this.state.show ? "Dark" : "Light";
		return (
			<div className="btn">
				{/* <body background-image={this.state.show ? </> : </>}></body> */}
				<button className="bkg" onClick={ () => {this.setState({show: !this.state.show})} }>{btnText}</button>
			</div>
		);
	}
}

export default Btnback;