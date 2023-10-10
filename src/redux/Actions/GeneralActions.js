import ActionTypes from './ActionTypes';

const showAlert = payload => {
  return {
    type: ActionTypes.showAlert,
    payload,
  };
};

const hideAlert = () => {
  return {
    type: ActionTypes.hideAlert,
  };
};

const showLoading = () => {
  return {
    type: ActionTypes.showLoading,
  };
};

const hideLoading = () => {
  return {
    type: ActionTypes.hideLoading,
  };
};

const extraContent = payload => {
  return {
    type: ActionTypes.EXTRA_CONTENT,
    payload,
  };
};
export { showLoading, hideLoading, showAlert, hideAlert, extraContent };
