export default function todos(state = [], action) {
  
  switch (action.type) {
    case 'ADD_TODO':
      // TODO: use Object.assign({}, state, {...}) to keep orig state untouched.
      return state.concat([{ todo: action.todo, checked: false }])
    
    case 'TOGGLE_TODO':
      return [ 
        ...state.slice(0, action.idx),
        {
          todo: state[action.idx].todo,
          checked: !state[action.idx].checked
        },
        ...state.slice(action.idx + 1)
      ];

    case 'REMOVE_TODO':
      return [ 
        ...state.slice(0, action.idx),
        ...state.slice(action.idx + 1)
      ];
    
    default:
      return state;
  };
}
