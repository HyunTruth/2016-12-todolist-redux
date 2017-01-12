import React, { Component } from 'react';
import Card from './Card';
import AddCard from './AddCard';

//prop에서 cardlist name을 받아온다..
function Process(props) {
  const cards = props.cards.map((cardData, index) => (
    <Card
      key={`card-${index}`}
      text={cardData.text}
      processid={cardData.processid}
      cardid={cardData.cardid}
      removeCard={props.removeCard}
      moveCardNext={props.moveCardNext}
    />
  ));
  return (
    <div className="Process">
      <h1>{props.title}</h1>
      <button className="deleteProcess" onClick={() => props.removeProcess(props.id)}>프로세스 삭제</button>
      {cards}
      <AddCard addCardClick={props.addCard} processid={props.processid} />
    </div>
  );
}

export default Process;
