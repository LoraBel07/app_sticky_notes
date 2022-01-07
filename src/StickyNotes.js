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
			alert("Ups, add a text please!")
		} else {
		let listArray = this.state.notesSet;
		listArray.push(textarea);
		this.setState({notesSet: listArray, typeNote: ''})
		}
		let noteText = document.getElementById("note-text").value;
		
		node1.style.margin = margin();
	
		
	
	function margin() {
		let random_margin = ["-10px", "-15px", "7px", "10px", "15px", "18px"];	
		return random_margin[Math.floor(Math.random() * random_margin.length)];
	}
	
	}

	deleteItem() {
		let listArray = this.state.notesSet;
		listArray = [];
		this.setState({notesSet: listArray});
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
					{/* <div className="containerBtn">
						<button className="btn" onclick={() => this.addItem(this.state.typeText)}>Create Note</button>
					</div> */}
					<div className="containerInp">
						<textarea className="txt note-text"
								type="text"
								placeholder="Write Note ..."
								onChange={ (e) => { this.onChangeEvent(e.target.value) } }
								value={ this.state.typeNote }
								length="96"></textarea>
						<img className="onIcon" src={onIcon} onClick={() => this.addItem(this.state.typeNote)} alt="on icon" width="30px"/>
						<img className="offIcon" src={offIcon} onClick={() => this.deleteItem()} alt="off icon" width="30px"/>
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