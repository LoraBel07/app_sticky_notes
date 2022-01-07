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
		let noteText = document.getElementsByClassName("note-text").value;
		let node0 = document.createElement("div");
		let node1 = document.createElement("h1");
		
		node1.innerHTML = noteText;
		node1.setAttribute("style", "width:250px; height:250px; font-size: 27px; padding: 25px; margin-top: 10px; overflow: hidden; box-shadow:0px 10px 24px 0px rgba(0,0,0,0.75)");
	
		node1.style.margin = margin();
		node1.style.transform = rotate();
		node1.style.background = color();	
		
		node0.appendChild(node1);
		// containerNotes.insertAdjacentElement("beforeend", node0);

		function margin() {
		let random_margin = ["-10px", "-15px", "7px", "10px", "15px", "18px"];	
		return random_margin[Math.floor(Math.random() * random_margin.length)];
		}
		function rotate() {
			let random_rotate = ["rotate(3deg)", "rotate(5deg)","rotate(10deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)",];
			return random_rotate[Math.floor(Math.random() * random_rotate.length)];
		}
		function color(i) {
			let random_color =["linear-gradient(315deg, #7ee8fa 30%, #80ff72 54%)", "linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)", "linear-gradient(315deg, #e288f9 0%, #ffc988 74%)", "linear-gradient(315deg, #eec0c6 30%, #7ee8fa 54%)", "linear-gradient(315deg, #f9484a 0%, #fbd72b 74%)", "linear-gradient(315deg, #9b4dca 0%, #f4f5f6 74%)"];
		
			if(i > random_color.length - 1){
				i = 0;
			}
			return random_color[i++];
		}

	
	}

	deleteItem() {
		let listArray = this.state.notesSet;
		listArray = [];
		this.setState({notesSet: listArray});
	}

	onChangeEvent(e) {
		this.setState({typeNote: e});
	}

	onFormSubmit = e => {
		e.preventDefault();
	}

	crossedWord(event) {
		const li = event.target;
		li.classList.toggle('crossed');
	}

	render() {
		return(
			<form onSubmit={ this.onFormSubmit }>
					{/* <div className="containerBtn">
						<button className="btn" onclick={() => this.addItem(this.state.typeText)}>Create Note</button>
					</div> */}
					<div className="containerInp">
						<input className="txt note-text"
								type="text"
								placeholder="Write Note ..."								
								onChange={ (e) => { this.onChangeEvent(e.target.value) } }
								value={ this.state.typeNote } />
								<button onClick={() => this.addItem(this.state.typeNote)}><img className="onIcon" src={onIcon}  alt="on icon" width="30px"/></button>
								<button onClick={() => this.deleteItem()}><img className="offIcon" src={offIcon} onClick={() => this.deleteItem()} alt="off icon" width="30px"/></button>
					</div>
					<div className="containerNotes">
						<ul>
							{this.state.notesSet.map((item, index) => (
								<li onClick={this.crossedWord} key={index}>{item}</li>
							))}					
						</ul>
				
					</div>


				</form>		
			
			
		)
	}
} 