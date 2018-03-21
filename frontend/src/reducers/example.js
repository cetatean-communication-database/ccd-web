const initialState = [
  {text: "Whales <3 karaoke!"}
];


export default function example(state=initialState, action) {
  let exampleList = state.slice();

  switch (action.type) {
    case 'ADD_THING':
      return [...state, {text: action.text}];

    case 'UPDATE_THING':
      let thingToUpdate = exampleList[action.id];
      thingToUpdate.text = action.text;
      exampleList.splice(action.id, 1, thingToUpdate);
      return exampleList

    case 'DELETE_THING':
      exampleList.splice(action.id, 1);
      return exampleList;

    default:
      return state;
  }
}
