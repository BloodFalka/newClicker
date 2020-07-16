// const reducer = (state = 0, action) => {
//     switch (action.type) {
//       case 'INC':
//         return state + 1;
//       case 'DEC':
//         return state - 1;
//       case 'RND':
//         return state + action.value;
//       default:
//         return state;
//     }
// }

// export default reducer;

function reducer(state = 10, action) {
  switch(action.type) {
      case 'CLICK': 
        return { hp: state.hp - action.value};
      case 'MONSTER_DIE':
        return {
          hp: action.value
        };

      default: return state;
  }
}

export default reducer;