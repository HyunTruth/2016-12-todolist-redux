import React, { Component } from 'react';

class AddCard extends Component {
  constructor() {
    super();
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onPressingEnter = this.onPressingEnter.bind(this);
  }
  onPressingEnter(event) {
    if (event.key === 'Enter') {
      this.props.addCardClick(this.props.processid, this.input.value);
      this.input.value = '';
    }
  }
  onButtonClick() {
    this.props.addCardClick(this.props.processid, this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div className="addCard">
        <input onKeyDown={this.onPressingEnter} ref={(input) => { this.input = input; }} />
        <button onClick={this.onButtonClick}>추가</button>
      </div>
    );
  }
}

export default AddCard;
