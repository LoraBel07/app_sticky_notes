import { Component } from "react";
import onIcon from './add.png';
import offIcon from './cancel.png';
import pin from './pin.png';
import Swal from 'sweetalert2';

export class StickyNotes extends Component {
		
	state = {
		typeNote: '',
		notesSet: [],
		item: [],
		count: this.props.value,
		items: [{ id: 1, value: 0 }, { id: 2, value: 10 }, { id: 3, value: 0 }]
		
	}
	addClassName() {
		this.typeNote.addClassName('removed')	
	}	

	addItem(textarea) {
		if(textarea === '') {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Add a text please!'				
			})
		} else {
		let listArray = this.state.notesSet;
		listArray.push(textarea);
		this.setState({notesSet: listArray, typeNote: ''})
		}		
	}

	deleteItem() {
		let listArray = this.state.notesSet;
		listArray = [];
		this.setState({notesSet: listArray});		
	}
	handleDelete = itemId => {
		alert("Button Clicked!");
		// const items = this.state.items.filter(item => item.id !== itemId);
		// this.setState({ items: items });
	};

			
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
					<div className="containerInp">
						<input className="txt note-text"
								type="text"
								placeholder="Write Note ..."								
								onChange={ (e) => { this.onChangeEvent(e.target.value) } }
								value={ this.state.typeNote } />
								<button onClick={() => this.addItem(this.state.typeNote)}><img className="onIcon" src={onIcon}  alt="on icon" width="30px"/></button>
								<button onClick={() => this.deleteItem()}><img className="offIcon" src={offIcon} alt="off icon" width="30px"/></button>
					</div>
					<div className="containerNotes">
											
							{this.state.notesSet.map((item, index) => (
								<p id="note" onClick={ this.crossedWord } onDblClick={ this.deleteNote } key={index}>
									<img className="pin" src={pin} alt="pin" width="85px"/>
									{item}
									<button className="offIconNote" onClick={() => this.props.onDelete(this.props.id)}>
									<img src={offIcon} alt="off icon" width="30px"/>
									</button>
									
									</p>
							))}	
											
						
				
					</div>


				</form>		
			
			
		)
	}
} 