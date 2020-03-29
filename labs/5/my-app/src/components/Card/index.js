import React from 'react';
import "./index.css";

class Card extends React.Component {
    
    render() {
        return (
            <div className="card">
                <h2>{this.props.name}</h2>
                <h1>
                    {this.props.temp}
                    {this.props.tempunit}
                </h1>
                <p>{this.props.detailcast}</p>
            </div>
        );
    }
}

export default Card;