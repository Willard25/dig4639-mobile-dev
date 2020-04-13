import React from 'react';
import Add from "../Contacts/Add/";
import Remove from "../Contacts/Remove/";

class Contacts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []};
    }

    componentDidMount() {
        window.fetch("http://plato.mrl.ai:8080/contacts", {headers: {API: "marley"}})
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                contacts: data.contacts
            });
        });
    }

    render() {
        return (
            <div>
                <div>
                {
                    this.state.contacts.map((value, index) => {
                        return <p key={index}>{value.name}</p>;  
                    })
                }
                </div>
                <Add />
                <Remove />
            </div>
        );
    }
}
  
export default Contacts;