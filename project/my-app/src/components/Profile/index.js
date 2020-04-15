import React from 'react';
import "./index.css"

class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {profile: []};
    }

    componentDidMount() {
        window.fetch("http://plato.mrl.ai:8080/profile", {
            "headers": {"API": "marley"}
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({
                profile: data
            });
        });
    }

    render() {
        return (
            <div className="profile">
                <p className="text">{this.state.profile.name}</p>
                <p className="text">{this.state.profile.count}</p>
            </div>
        );
    }
}
  
export default Profile;