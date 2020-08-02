
const filtersReducerDefaultState = {
  text: '',
  status: '',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SET_STATUS_FILTER':
      return {
        ...state,
        status: action.status
      };
    default:
      return state;
  }
};
