import ActionTypes from '../Actions/ActionTypes';
import { useColorScheme } from 'react-native';

let initialState = {
  showAlert: false,
  alertOptions: null,
  loading: false,
  userInfo: [],
  theme: false,
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

    case ActionTypes.USER_INFO:
      state = { ...state, userInfo: action.payload };
      break;

      case ActionTypes.SET_THEME:
        state = {...state, theme: action.payload};
        break;

    default:
      break;
  }
  return state;
};

export default GeneralReducer;
