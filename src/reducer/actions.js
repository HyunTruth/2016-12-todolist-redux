export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_PROCESS = 'ADD_PROCESS';
export const REMOVE_PROCESS = 'REMOVE_PROCESS';
export const MOVECARD_NEXT = 'MOVECARD_NEXT';

export function addCard(processid, text) {
  return { type: ADD_CARD, processid, text };
}
export function removeCard(processid, cardid) {
  return { type: REMOVE_CARD, processid, cardid };
}
export function addProcess(text) {
  return { type: ADD_PROCESS, text };
}
export function removeProcess(processid) {
  return { type: REMOVE_PROCESS, processid };
}

export function moveCardNext(text, processid, cardid) {
  return { type: MOVECARD_NEXT, text, processid, cardid };
}
