import React from 'react';
import Card from "../Card/";

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
    }

    componentDidMount() {
        fetch("https://api.weather.gov/gridpoints/MLB/25,69/forecast")
        .then(res => res.json())
        .then((result) => {
            this.setState({
                data: result.properties.periods
            })
        })
        .catch((error) => {console.log(error)});

}

    render() {
        return (
            <div>
                {this.state.data.map((card, index) => <Card key={index}
                name={card.name}
                temp={card.temperature}
                tempunit={card.temperatureUnit}
                detailcast={card.detailedForecast}
                />)}
            </div> 
        );
    }
}

export default CardList;