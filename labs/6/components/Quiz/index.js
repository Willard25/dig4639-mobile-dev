import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    quiz: {
        color: 'rgb(0,0,0)',
        fontFamily: 'Arial, Helvetica, sans-serif'
    },
    questions: {
        backgroundColor: 'rgb(250,250,250)',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '20px',
        borderColor: 'rgb(10,50,150)',
        borderWidth: '1px'
    },
    score: {
        color: 'rgb(10,50,150)',
        fontSize: '28px',
        fontWeight: 'bold'
    },
  });

class Quiz extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            score: '',
            q1: 0,
            q2: 0,
            q3: 0,
            q4: 0,
            q5: 0,
        }
    }
    //q1
    changeq1C = () => {
        this.setState({q1: 0 + 1});
    }
    changeq1W = () => {
        this.setState({q1: 0});
    }
    //q2
    changeq2C = () => {
        this.setState({q2: 0 + 1});
    }
    changeq2W = () => {
        this.setState({q2: 0});
    }
    //q3
    changeq3C = () => {
        this.setState({q3: 0 + 1});
    }
    changeq3W = () => {
        this.setState({q3: 0});
    }
    //q4
    changeq4C = () => {
        this.setState({q4: 0 + 1});
    }
    changeq4W = () => {
        this.setState({q4: 0});
    }
    //q5
    changeq5C = () => {
        this.setState({q5: 0 + 1});
    }
    changeq5W = () => {
        this.setState({q5: 0});
    }

    submitQ = () => {       
        this.setState({score: this.state.q1 + this.state.q2 + this.state.q3 + this.state.q4 + this.state.q5});
    }

    render() {
        return(
            <View style={styles.quiz}>
                <Text style={styles.questions}>
                    <div>10 + 5?</div>
                    <input type="radio" id="Yes" name="Q1" onClick={this.changeq1C} />15
                    <input type="radio" id="No" name="Q1" onClick={this.changeq1W} />5          
                    <br /><br />
                    <div>30 - 12?</div>
                    <input type="radio" id="Yes" name="Q2" onClick={this.changeq2W} />42
                    <input type="radio" id="No" name="Q2" onClick={this.changeq2C} />18
                    <br /><br />
                    <div>4 x 5?</div>
                    <input type="radio" id="Yes" name="Q3" onClick={this.changeq3C} />20
                    <input type="radio" id="No" name="Q3" onClick={this.changeq3W} />9
                    <br /><br />
                    <div>is 3 > 7?</div>
                    <input type="radio" id="Yes" name="Q4" onClick={this.changeq4W} />Yes
                    <input type="radio" id="No" name="Q4" onClick={this.changeq4C} />No
                    <br /><br />
                    <div>square root of 16 is 4?</div>
                    <input type="radio" id="Yes" name="Q5" onClick={this.changeq5C} />Yes
                    <input type="radio" id="No" name="Q5" onClick={this.changeq5W} />No
                </Text>
                <br />
                <button class="submit" onClick={this.submitQ}>Submit Quiz</button>
                <br />
                <Text style={styles.score}>Score: {this.state.score}</Text>
            </View>
        );
    }
}

export default Quiz;
