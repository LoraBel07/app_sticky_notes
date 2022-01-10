import { Component } from "react";
import onIcon from './add.png';
import offIcon from './cancel.png';
import pin from './pin.png';
import Swal from 'sweetalert2';

export class StickyNotes extends Component {
		
	state = {
		typeNote: '',
		notesSet: []		
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
	deleteOneItem(e) {
		let notesArray = this.state.notesSet;
        notesArray.splice(e.index, 1);
        this.setState({notesSet: notesArray});
	};		
	render() {
		return(
			<form onSubmit={ this.onFormSubmit }>
					<div className="containerInp">
						<input className="txt note-text"
								type="text"
								placeholder="Write Note ..."								
								onChange={ (e) => { this.onChangeEvent(e.target.value) } }
								value={ this.state.typeNote } />
								<button onClick={ () => this.addItem(this.state.typeNote) }><img className="onIcon" src={ onIcon }  alt="on icon" width="30px"/></button>
								<button onClick={ () => this.deleteItem() }><img className="offIcon" src={ offIcon } alt="off icon" width="30px"/></button>
					</div>
					<div className="containerNotes">											
							{ this.state.notesSet.map((item, index) => (
								<p id="note" onClick={ this.crossedWord } onDoubleClick={ (e) => this.deleteOneItem({index}) } key={index}>
									<img className="pin" src={pin} alt="pin" width="85px"/>
									{item}									
									</p>
							)) }	
											
					</div>
			</form>	
		)
	}
} 