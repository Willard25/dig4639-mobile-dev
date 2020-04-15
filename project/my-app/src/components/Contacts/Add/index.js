import React from 'react';
import "./index.css"

class Add extends React.Component {

    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputNumber = React.createRef();
        this.state = {
            added: {}
        };

    }

    addContact = () => {
        fetch("https://plato.mrl.ai:8081/contacts/add", {
            "method": "POST",
            "headers": {"API": "marley", "Content-Type": "application/json", "Accept": "application/json"},
            "body": JSON.stringify({
                "name": this.inputName.current.value,
                "number": this.inputNumber.current.value
            })
            .then((res) => res.json())
            .then((data) => this.setState({added: data.added}))
        });
    }

    render() {
        return (
            <div className="add">
                <h2 className="header">Add Contacts</h2>
                <form onSubmit={this.addContact}>
                    <label>Name</label><br />
                    <input type="text" id="name" ref={this.inputName} /><br />
                    <label>Phone Number</label><br />
                    <input type="text" id="number" ref={this.inputNumber} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Add;