import React from 'react';
import Button from './Button';

class Calculator extends React.Component {
    state = {
        equation: '',
        result: 0
    }

    constructor(props) {
        super(props);
        this.keydownHandler = this.keydownHandler.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown',this.keydownHandler);
    }

    keydownHandler(event) {
        var keyPress = event.key;
        var availableSelection = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '/', '+', '-', '%', '=', 'c'];
        if (availableSelection.includes(keyPress)) {
            this.onClick(event);
        }
    }

    onClick = event => {
        let equation = this.state.equation;
        var pressedButton = event.target.innerHTML;

        if (event.type === 'keydown') {
            pressedButton = event.key;
        }
        
        if (pressedButton === 'C' || pressedButton === 'c') {
            return this.clear();
        } else if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.') {
            equation += pressedButton;
        } else if (pressedButton === '+' || pressedButton === '-' || pressedButton === '*' || pressedButton === '/' || pressedButton === '%') {
            equation += ' ' + pressedButton + ' ';
        } else if (pressedButton === '=') {
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult)? evalResult : evalResult.toFixed(2);
                this.setState({result});
            } catch (error) {
                alert('Invalid Mathematical Equation');
            }
        }
        else {
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }
                
        this.setState({equation: equation});
    }

    clear() {
        this.setState({equation: '', result: 0});
    }

    render() {
        return (
            <main className="calculator">
                <section className="screen">
                    <div className="result-screen">
                        {this.state.result}
                    </div>
                    <div className="computation-screen">
                        {this.state.equation}
                    </div>
                </section>
                <section className="keypad">
                    <div className="keypad__row">
                        <Button className="btn primary" onButtonPress={this.onClick}>C</Button>
                        <Button className="btn primary" onButtonPress={this.onClick}>&larr;</Button>
                        <Button className='btn operator' onButtonPress={this.onClick}>%</Button>
                        <Button className='btn operator' onButtonPress={this.onClick}>/</Button>
                    </div>
                        
                    <div className="keypad__row">
                        <Button onButtonPress={this.onClick}>7</Button>
                        <Button onButtonPress={this.onClick}>8</Button>
                        <Button onButtonPress={this.onClick}>9</Button>
                        <Button className='btn operator' onButtonPress={this.onClick}>*</Button>
                    </div>

                    <div className="keypad__row">
                        <Button onButtonPress={this.onClick}>4</Button>
                        <Button onButtonPress={this.onClick}>5</Button>
                        <Button onButtonPress={this.onClick}>6</Button>
                        <Button className='btn operator' onButtonPress={this.onClick}>-</Button>
                    </div>

                    <div className="keypad__row">
                        <Button onButtonPress={this.onClick}>1</Button>
                        <Button onButtonPress={this.onClick}>2</Button>
                        <Button onButtonPress={this.onClick}>3</Button>
                        <Button className='btn operator' onButtonPress={this.onClick}>+</Button>
                    </div>

                    <div className="keypad__row">
                        <Button onButtonPress={this.onClick}>0</Button>
                        <Button onButtonPress={this.onClick}>.</Button>
                        <Button className='btn large' onButtonPress={this.onClick}>=</Button>
                    </div>
                </section>
            </main>
        );
    }
}

export default Calculator;