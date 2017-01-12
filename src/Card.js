import React, { Component } from 'react';

function Card(props) {
  return (
    <div className="Card">
      {props.text}
      <button onClick={() => {props.moveCardNext(props.text, props.processid, props.cardid )}}>완료</button>
      <button onClick={() => {props.removeCard(props.processid, props.cardid)}}>삭제</button>
    </div>
  );
}

export default Card;
