import React, { Component } from 'react';
import {AppState, AsyncStorage} from 'react-native';
import PushNotification from 'react-native-push-notification';
import store from '../configs/store';

const NOTIFICATION_KEY = 'Notifications:miniquiz';
const NOTIFICATION_ID = 123;

const AppNotifications = {
	start(){
		PushNotification.configure({
			onNotification: function(notification) {
				console.log( 'NOTIFICATION:', notification );				
			},
		});
		AppState.addEventListener('change', this.handleAppStateChange);		
	},

	finish(){
		AppState.removeEventListener('change', this.handleAppStateChange);
	},

	handleAppStateChange(appState) {
		if(appState === 'background')
			AppNotifications.addNotification();

		else if (appState === 'active')
			AppNotifications.removeNotification();
    },

	addNotification(){
		AsyncStorage.getItem(NOTIFICATION_KEY)
    	.then(JSON.parse)
    	.then(data => {
			if (data === null) {				

				const date = AppNotifications._getDateNotification(true);
				const message = AppNotifications._getMessageNotification();
	
				PushNotification.localNotificationSchedule({
					message,
					date,
					id: NOTIFICATION_ID,
					userInfo: {
						id: NOTIFICATION_ID
					},
					repeatType: 'day',
				});
				AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(NOTIFICATION_ID))		
			}
		})
		.catch(error => {
			console.log('erro', error.message)
		})
		
	},

	removeNotification(){
		AsyncStorage.getItem(NOTIFICATION_KEY)
    	.then(JSON.parse)
    	.then(data => {
			PushNotification.cancelLocalNotifications({
				id: data
			});
			AsyncStorage.removeItem(NOTIFICATION_KEY);
		})
		.catch(error => {
			console.log('erro', error.message)
		})
	},

	_getDateNotification(test=false){

		// para testar notificação. Notifica depois de 10 segundos 
		if(test)
			return new Date(Date.now() + (10 * 1000)) ;

		let tomorrow = new Date();
		tomorrow.setDate(tomorrow.getDate() + 1);
		return new Date(tomorrow);
	},

	_getMessageNotification(){
		const {user:{name}} = store.getState();
		return `${name}, você ainda não estudou hoje!` 
	}
}


export default AppNotifications;

