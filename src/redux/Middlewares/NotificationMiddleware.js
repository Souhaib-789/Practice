import Axios from 'axios';
import Apis from '../../config/Apis';
import { hideLoading, showLoading, showAlert, getContent } from '../Actions/GeneralActions'
import { getHeaders } from '../../Utils';
import { getNotification, clearNotification } from '../Actions/NotificationAction'
import Storage from '../../Utils/AsyncStorage';
import { userData } from '../Actions/AuthAction'

export const NotificationMiddleware = {

    getNotification: (userData) => {
        return dispatch => {
            dispatch(showLoading());
            return new Promise(async (resolve, reject) => {
                try {
                    if (userData?.next_page_url == undefined) {
                        if (userData?.next_page_url) {
                        }
                        else {
                            dispatch(clearNotification())
                        }
                    }
                    const { data } = await Axios.post(
                        Apis.notifications(userData?.next_page_url),
                        {},
                        await getHeaders());
                    if (data?.success) {
                        dispatch(hideLoading());
                        if (data?.data) {
                            dispatch(getNotification(data?.data))
                        }
                    }
                } catch (error) {
                    reject(error);
                    console.log(error);
                    dispatch(hideLoading());
                    dispatch(showAlert({
                        title: 'Get Notification',
                        message: error?.response?.data?.message,
                        type: 'Error'
                    }))

                }
            });
        };
    },

    notificationONOFF: (updatedUser) => {
        return dispatch => {
            dispatch(showLoading());
            return new Promise(async (resolve, reject) => {
                try {
                    const { data } = await Axios.get(
                        Apis.updateNotificationSetting,
                        await getHeaders());
                    if (data?.success) {
                        await Storage.set('@user', JSON.stringify(updatedUser));
                        dispatch(userData(updatedUser));
                        dispatch(hideLoading());
                        dispatch(showAlert({
                            title: 'Notification ON OFF',
                            message: data?.message,
                            type: 'Error'
                        }))
                    }
                } catch (error) {
                    reject(error);
                    console.log(error);
                    dispatch(hideLoading());
                    dispatch(showAlert({
                        title: 'Notification ON OFF',
                        message: error?.response?.data?.message,
                        type: 'Error'
                    }))
                }
            });
        };
    },

}

