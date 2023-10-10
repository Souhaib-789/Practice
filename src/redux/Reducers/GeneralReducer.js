import ActionTypes from '../Actions/ActionTypes';

let initialState = {
  showAlert: false,
  alertOptions: null,
  loading: false,
  extraContent: []
};

const GeneralReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.showAlert:
      state = { ...state, showAlert: true, alertOptions: action.payload };
      break;

    case ActionTypes.hideAlert:
      state = { ...state, showAlert: false, alertOptions: null };
      break;

    case ActionTypes.showLoading:
      state = { ...state, loading: true };
      break;

    case ActionTypes.hideLoading:
      state = { ...state, loading: false };
      break;

    case ActionTypes.EXTRA_CONTENT:
      state = { ...state, extraContent: action.payload };
      break;

    default:
      break;
  }
  return state;
};

export default GeneralReducer;
