import ActionTypes from '../Actions/ActionTypes';

let initialState = {
  isLogin: false,
  user: null,
  blisses: []
};

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.isLogin:
      state = { ...state, isLogin: action.payload };
      break;

    case ActionTypes.USER_DATA:
      state = { ...state, user: action.payload };
      break;

    case ActionTypes.LOGOUT:
      state = { user: null, isLogin: false };
      break;

    case ActionTypes.GET_MOREDATA:
      state = { ...state, blisses: action.payload };
      break;

    default:
      break;
  }
  return state;
};

export default AuthReducer;
