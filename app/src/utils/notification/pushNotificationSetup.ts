import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';
import { Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setExpoPushToken } from '../../slices/globalSlice';
import { useSetExpoPushTokenMutation } from '../../services/backend';
import { selectCurrentUser } from '../../slices/authSlice';


const pushNotificationSetupAsync = async (user, setPushToken) => {
	// const dispatch = useDispatch();
	// const [setPushToken] = useSetExpoPushTokenMutation();
	// const user = useSelector(selectCurrentUser);
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    const token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
		// dispatch(setExpoPushToken({expoPushToken: token}));
		setPushToken({userId: user?.id, token: token});
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
};

export default pushNotificationSetupAsync;