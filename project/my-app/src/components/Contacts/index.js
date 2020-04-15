import React from 'react';
import Add from "../Contacts/Add/";
import Remove from "../Contacts/Remove/";
import "./index.css"

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    componentDidMount() {
        window.fetch("http://plato.mrl.ai:8080/contacts", {
            "headers": {"API": "marley"}})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                contacts: data.contacts
            })
        });
    }

    render() {
        return (
            <div className="contact">
                <div className="contactList">
                    <h2 className="header">Contacts</h2>
                    <div className="list">
                    {
                        this.state.contacts.map((value, index) => {
                            return <p key={index}>Name:{value.name}<br />Number:{value.number}</p>;  
                        })
                    }
                    </div>
                </div>
                <Add />
                <Remove />
            </div>
        );
    }
}
  
export default Contacts;