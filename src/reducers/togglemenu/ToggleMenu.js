const initialState = false;

const ToggleMenu = (state = initialState, action) => {
  switch(action.type) {
    case 'TOGGLE_MENU':
      return !state;
    case 'CLOUSE_MENU':
      return initialState;
    default :
      return state;
  }
}

export default ToggleMenu