
import React, { Component } from 'react';

class AddProcess extends Component {

  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onPressingEnter = this.onPressingEnter.bind(this);
  }

  onPressingEnter(event) {
    if(event.key === 'Enter'){
      this.props.addProcessClick(this.input.value);
      this.input.value = '';
    }
  }

  onButtonClick(event) {
    this.props.addProcessClick(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="addProcess">
        <input onKeyDown={this.onPressingEnter} ref={(input) => { this.input = input; }} />
        <button onClick={this.onButtonClick}>신규 프로세스</button>
      </div>
    );
  }

}

export default AddProcess;
