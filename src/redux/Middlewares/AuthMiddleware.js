import { hideLoading, showLoading, showAlert, extraContent } from '../Actions/GeneralActions'
import { login } from '../Actions/AuthAction'

export const AuthMiddleware = {

  login: (loginData) => {
    return dispatch => {
      dispatch(showLoading());
      return new Promise(async (resolve, reject) => {
        try {
            dispatch(login(true))
        } catch (error) {
          reject(error);
          dispatch(showAlert({
            title: 'In login Catch',
            message: error?.response?.data?.message,
            type: 'Error',
            status: error?.response?.status
          }))
        } finally {
          dispatch(hideLoading());
        }
      });
    };
  },


  // SignUp: (signupData) => {
  //   return dispatch => {
  //     dispatch(showLoading());
  //     return new Promise(async (resolve, reject) => {
  //       try {
  //         let formdata = new FormData();
  //         formdata.append('first_name', signupData?.FirstName);
  //         formdata.append('last_name', signupData?.LastName);
  //         formdata.append('email', signupData?.email);
  //         formdata.append('contact_no', signupData?.Contact);
  //         formdata.append('password', signupData?.password);
  //         formdata.append('confirm_password', signupData?.confirmedPass);
  //         formdata.append('role', signupData?.userRole);
  //         formdata.append('city', signupData?.selectedCity?.city_id);
  //         if (signupData?.degree) formdata.append('degree', signupData?.degree);
  //         if (signupData?.Experience) formdata.append('experience', signupData?.Experience);
  //         formdata.append('home_address', signupData?.address);
  //         formdata.append('state', signupData?.state);
  //         formdata.append('zip_code', signupData?.postalCode);
  //         const { data } = await Axios.post(Apis.signup, formdata);
  //         if (data?.success) {
  //           resolve(data);
  //         }
  //       } catch (error) {
  //         reject(error);
  //         dispatch(showAlert({
  //           title: 'In Signup Catch',
  //           message: error?.response?.data?.message,
  //           type: 'Error',
  //           status: error?.response?.status
  //         }))
  //       } finally {
  //         dispatch(hideLoading());
  //       }
  //     });
  //   };
  // },

 

}

