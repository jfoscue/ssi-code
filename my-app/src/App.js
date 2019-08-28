import React from 'react';
import './App.css';


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				contacts: [],
				name: "",
				address: "",
				city: "",
				state: "",
				zipcode: "",
				phone: ""
		}		
	}
	
	handleNameChange(e) {
		this.setState({name: e.target.value});
	}
	 
	handleAddressChange(e) {
		this.setState({address: e.target.value});
	}
	 
	handleCityChange(e) {
		this.setState({city: e.target.value});
	}
	 
	handleStateChange(e) {
		this.setState({state: e.target.value});
	}
	 
	handleZipcodeChange(e) {
		this.setState({zipcode: e.target.value});
	}
	 
	handlePhoneChange(e) {
		this.setState({phone: e.target.value});
	}
	 
	handleAddContact() {
	    const contact = {name: this.state.name, address: this.state.address, 
	    		city: this.state.city, state: this.state.state, zipcode: this.state.zipcode,
	    		phone: this.state.phone}
	    // Update data
	    this.state.contacts.push(contact);
	    // Update state
	    this.setState({contacts: this.state.contacts});
	}
	
	render() {
		return (
			<div className="App">
				<header >
			    <p>Welcome to Jim's Contacts!</p>
	
			    </header>
				<div >        
					<form><label className="input-label">Name: </label>
						<input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
					</form>
					<form><label className="input-label">Address: </label>
						<input type="text" name="address" placeholder="Street Address" value={this.state.address} onChange={this.handleAddressChange.bind(this)} />
					</form>
						<form><label className="input-label">City: </label>
						<input type="text" name="city" placeholder="City" value={this.state.city} onChange={this.handleCityChange.bind(this)} />
					</form>
						<form><label className="input-label">State: </label>
						<input type="text" name="state" placeholder="State" value={this.state.state} onChange={this.handleStateChange.bind(this)} />
					</form>
						<form><label className="input-label">Zipcode: </label>
						<input type="text" name="zipcode" placeholder="Zipcode" value={this.state.zipcode} onChange={this.handleZipcodeChange.bind(this)} />
					</form>
						<form><label className="input-label">Phone: </label>
						<input type="text" name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handlePhoneChange.bind(this)} />
					</form>
					<button type="button" onClick={this.handleAddContact.bind(this)}>Add Contact</button>

				</div>
				<br/>
				<div>
				<header>Contacts</header>
				<ContactsTable
		          contacts={this.state.contacts}
		        />
				</div>
			</div>
	
		);
 	}
}

const Contact = ({contact}) => {
	// Each Contact
	return (<tr> <td>{contact.name}</td>
		<td>{contact.address}</td>
		<td>{contact.city}</td> 
		<td>{contact.state}</td> 
		<td>{contact.zipcode}</td> 
		<td>{contact.phone}</td></tr>);
}

const ContactsTable = ({contacts}) => {
	if (contacts.length > 0) {
		const contactRow = contacts.map((contact) => {
	
			return (<Contact contact={contact} />)
		});
	
		return (<table align="center"><tbody>{contactRow}</tbody></table>);
	} else return (<div/>);
}


export default App;
