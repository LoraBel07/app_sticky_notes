import { Component } from "react";
import onIcon from './add.png';
import offIcon from './cancel.png';

export class StickyNotes extends Component {
		
	state = {
		typeNote: '',
		notesSet: []
	}

	addItem(textarea) {
		if(textarea === '') {
			alert("Ups, add an item please!")
		} else {
		let listArray = this.state.notesSet;
		listArray.push(textarea);
		this.setState({notesSet: listArray, typeNote: ''})
		}
	}

	onChangeEvent(e) {
		this.setState({typeNote: e});
		console.log(e);
	}

	onFormSubmit(e) {
		e.preventDefault()
	}

	crossedWord(event) {
		const li = event.target;
		li.classList.toggle('crossed');
	}

	render() {
		return(
			<div className="main-container">
				<form onSubmit={this.onFormSubmit}>
					<div className="containerBtn">
						<button className="btn" onClick={() => this.addItem(this.state.typeNote)}>Create Note</button>
					</div>
					<div className="containerInp">
						<textarea type="text"
								placeholder="Write Note ..."
								onChange={ (e) => { this.onChangeEvent(e.target.value) } }
								value={ this.state.typeNote }></textarea>
						<img src={onIcon} alt="on icon" width="30px"/>
						<img src={offIcon} alt="off icon" width="30px"/>
					</div>
					<div className="containerNotes">
						<ul>
						{this.state.notesSet.map((item, index) => (
							<li onClick={this.crossedWord} key={index}>{item}</li>
					))}					
				</ul>
				
					</div>


				</form>




				
				
				
			
			
			
			</div>
		)
	}
} 