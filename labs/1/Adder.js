class Adder {
    constructor(props) {
        this.props = props;
    }

    /*function sum(x, y) {
        return x + y;
    }*/

    render() {
        return `<p>The sum of ${this.props.a} and ${this.props.b} is ${sum(this.props.a, this.props.b)}</p>`;
    }
}

module.exports = Adder;