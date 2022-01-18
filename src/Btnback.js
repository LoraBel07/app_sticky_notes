import { Component } from "react";
import Dark from "./Dark";
import Light from "./Light";

class Btnback extends Component {
	state = {
		show: true
	}
	render() {
		const btnText = this.state.show ? "Dark" : "Light";
		
		return (
			<div className="btn">
				<body background-color={this.state.show ? <Light/> : <Dark/>}></body>
				<button className="bkg" onClick={ () => {this.setState({show: !this.state.show})} }>{btnText}</button>
			</div>
		);
		
	}
}

export default Btnback;