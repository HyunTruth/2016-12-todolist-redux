
import { ADD_CARD, REMOVE_CARD, ADD_PROCESS, REMOVE_PROCESS, MOVECARD_NEXT } from '../reducer/actions';

const ACTION_HANDLERS = {
  [ADD_PROCESS]: (state, action) => {
    let id = 0;
    if (state.length === 0) {
      id = -1;
    } else {
      state.forEach((process) => {
        if (process.processid > id) {
          id = process.processid;
        }
      });
    }
    return [...state, {
      processid: id+1,
      text: action.text,
      cards: [],
    }];
  },
  [ADD_CARD]: (state, action) => {
    const index = state.findIndex(process => process.processid === action.processid);
    const process = state[index];
    let lastCardid;
    process.cards.forEach((card) => {
      if (card.cardid > lastCardid) {
        lastCardid = card.cardid;
      }
    });
    const newCard = {
      processid: action.processid,
      cardid: lastCardid ? lastCardid + 1 : 0,
      text: action.text,
    };
    return [
      ...state.slice(0, index),
      Object.assign({}, process, {
        cards: [
          ...process.cards,
          newCard,
        ],
      }),
      ...state.slice(index + 1),
    ];
  },
  [REMOVE_CARD]: (state, action) => {
    console.log(action);
    const index = state.findIndex(process => process.processid === action.processid);
    const process = state[index];
    const cardIndex = process.cards.findIndex(card => card.cardid === action.cardid);
    return [
      ...state.slice(0, index),
      Object.assign({}, process, {
        cards: [
          ...process.cards.slice(0, cardIndex),
          ...process.cards.slice(cardIndex + 1),
        ],
      }),
      ...state.slice(index + 1),
    ];
  },
  [REMOVE_PROCESS]: (state, action) => {
    const index = state.findIndex(process => process.processid === action.processid);
    return [
      ...state.slice(0, index),
      ...state.slice(index + 1),
    ];
  },
  [MOVECARD_NEXT]: (state, action) => {
    let nextProcessid;
    const currentProcessid = action.processid;
    state.forEach((process) => {
      // nextProcessid > process.id  > processid
      if (process.processid > currentProcessid && (!nextProcessid || nextProcessid > process.processid)) {
        nextProcessid = process.processid;
      }
    });
    if (!nextProcessid) {
      return;
    }
    const text = action.text;
    const cardid = action.cardid;
    console.log(action)
    const added = ACTION_HANDLERS[ADD_CARD](state, { type: ADD_CARD, processid: nextProcessid, text });
    return ACTION_HANDLERS[REMOVE_CARD](added, { type: REMOVE_CARD, processid: currentProcessid, cardid: cardid });
  },
};

// ------------------------------------
// Reducer
// ------------------------------------

const initialState = [];

export default function processes(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
