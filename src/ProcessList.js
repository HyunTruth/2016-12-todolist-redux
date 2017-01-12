import { connect } from 'react-redux';
import { addCard, removeCard, addProcess, removeProcess, moveCardNext } from './reducer/actions'
import React, { Component } from 'react';
import AddProcess from './AddProcess';
import Process from './Process';


class ProcessList extends Component {
  render() {
    const { dispatch } = this.props;
    const processes = this.props.state.map((data, index) => (
      <Process
        key={`process-${index}`}
        title={data.text}
        cards={data.cards}
        processid={data.processid}
        removeCard={(processid, cardid) => dispatch(removeCard(processid, cardid))}
        removeProcess={processid => dispatch(removeProcess(processid))}
        addCard={(processid, text) => dispatch(addCard(processid, text))}
        moveCardNext={(text, processid, cardid) => dispatch(moveCardNext(text, processid, cardid))}
      />
    ));
    return (
      <div className="processList">
        <AddProcess addProcessClick={text => dispatch(addProcess(text))} />
        {processes}
      </div>
    );
  }

}
function select(state) {
  return {
    state,
  };
}

export default connect(select)(ProcessList);
