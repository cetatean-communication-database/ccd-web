export const addThing = text => {
  return {
    type: 'ADD_THING',
    text
  }
}

export const updateThing = (id, text) => {
  return {
    type: 'UPDATE_THING',
    id,
    text
  }
}

export const deleteThing = id => {
  return {
    type: 'DELETE_THING',
    id
  }
}
