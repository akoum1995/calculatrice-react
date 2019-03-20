import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      equation:"",
      result:""
    }
  }
  addEquation = (event) => {
    const value = event.target.value;
    this.setState({
      equation: this.state.equation + value,
      result: value,
    })
  }
  calculate = () => {
    const value = eval(this.state.equation);
    this.setState({
      equation: value,
      result: value
    })
  }
  erase = () => {
    this.setState({
      equation: "",
      result:""
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-4" style={{ margin: 'auto' }}>
          <h1 className="text-center"> This is the calculator :D !</h1>
          <input type="text" value={this.state.result} className="form-control"></input>
          <table style={{ width: '100%' }}>
            <tr>
              <td>
                <button name="1" value="1" onClick={this.addEquation} className="btn btn-default button-calculator">1</button>
              </td>
              <td>
                <button name="2" value="2" onClick={this.addEquation} className="btn btn-default button-calculator">2</button>
              </td>
              <td>
                <button name="3" value="3" onClick={this.addEquation} className="btn btn-default button-calculator">3</button>
              </td>
              <td>
                <button name="+" value="+" onClick={this.addEquation} className="btn btn-primary button-calculator">+</button><br />
              </td>
            </tr>
            <tr>
               <td>
                <button name="4" value="4" onClick={this.addEquation} className="btn btn-default button-calculator">4</button>
              </td>
              <td>
                <button name="5" value="5" onClick={this.addEquation} className="btn btn-default button-calculator">5</button>
              </td>
              <td>
                <button name="6" value="6" onClick={this.addEquation} className="btn btn-default button-calculator">6</button>
              </td>
              <td>
                <button name="-" value="-" onClick={this.addEquation} className="btn btn-primary button-calculator">-</button></td>
            </tr>
            <tr>
              <td>
                <button name="7" value="7" onClick={this.addEquation} className="btn btn-default button-calculator">7</button>
              </td>
              <td>
                <button name="8" value="8" onClick={this.addEquation} className="btn btn-default button-calculator">8</button>
              </td>
              <td>
                <button name="9" value="9" onClick={this.addEquation} className="btn btn-default button-calculator">9</button>
              </td>
              <td>
                <button name="*" value="*" onClick={this.addEquation} className="btn btn-primary button-calculator">x</button></td>
            </tr>
            <tr>
              <td>
                <button name="C" value="C" onClick={this.erase} className="btn btn-danger button-calculator">C</button>
              </td>
              <td>
                <button name="0" value="0" onClick={this.addEquation} className="btn btn-default button-calculator">0</button>
              </td>
              <td>
                <button name="=" value="=" onClick={this.calculate} className="btn btn-success button-calculator">=</button>
              </td>
              <td>
                <button name="/" value="/" onClick={this.addEquation} className="btn btn-primary button-calculator">÷</button></td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
