import React from 'react';
import "./index.css"

class Remove extends React.Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.state = {removed: {}};
    }

    removeContact = () => {
        fetch("https://plato.mrl.ai:8081/contacts/add", {
            "method": "POST",
            "headers": {"API": "marley", "Content-Type": "application/json", "Accept": "application/json"},
            "body": JSON.stringify({
                "position":this.inputRef.current.value
            })
            .then((res) => res.json())
            .then((data) => this.setState({removed: data.removed}))
        })
    
    }

    render() {
        return (
            <div className="remove">
                <h2 className="header">Delete Contacts</h2>
                <form onSubmit={this.removeContact}>
                    <label>Contact Position</label><br />
                    <input type="text" id="position" ref={this.inputRef} /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
  
export default Remove;