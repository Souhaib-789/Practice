import ActionTypes from './ActionTypes';

const login = payload => {
    return {
        type: ActionTypes.isLogin,
        payload,
    };
};
const Logout = () => {
    return {
        type: ActionTypes.LOGOUT,
    };
};
const userData = payload => {
    return {
        type: ActionTypes.USER_DATA,
        payload,
    };

};

const getMoreData = (payload) => {
    return {
        type: ActionTypes.GET_MOREDATA,
        payload,
    };

};

export { login, userData, Logout, getMoreData };