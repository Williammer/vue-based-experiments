export default function todos(state = [], action) {
  
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ todo: action.todo, checked: false }])
    
    case 'TOGGLE_ITEM':
      state[action.idx].checked = !state[action.idx].checked;
      return state;

    case 'REMOVE_TODO':
      state.splice(action.idx, 1);
      return state;
    
    default:
      return state;
  };
}
