import React, { useState } from 'react';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import SetNotifications from '../components/Notifications/Notifications';
import { Button, IndexPath } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectCurrentUser } from '../slices/authSlice';
import { useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NotificationScreen } from '../screens/NotificationScreen/notificationScreen';
import { Icon } from 'react-native-elements';
import styles from '../screens/styles';
import SettingsMenu from '../components/SettingsMenu/SettingsMenu';
import { Settings } from 'react-native-feather';
import Rewards from '../components/Rewards/Rewards';
import LoginScreen from '../screens/LoginScreen/loginScreen';


const Stack = createNativeStackNavigator()


const { Navigator, Screen } = createBottomTabNavigator();

const LoginNavigator = () => (
	<Stack.Navigator>
		<Stack.Screen
			name="SignIn"
			component={LoginScreen}
			options={{
				title: 'Innskráning'
			}} />
	</Stack.Navigator>
)


const HomeNavigator = () => {
	const [selectedIndex, setSelectedIndex] = useState<IndexPath|undefined>(undefined);
  const [visible, setVisible] = useState(false);

  const onItemSelect = (index: any) => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = () => (
		<Icon
			name="settings"
			type="material"
			onPress={() => setVisible(true)}
		/>
  );

	return(
	// const navigation: <ProfileScreenNavigationProp>;
		// const navigation = useNavigation()
		// <Navigator tabBar={props => <BottomNavigation {...props} />}>
		// 	<Screen name='Mælaborð' component={DashboardScreen} />
		// 	<Screen
		// 		name='Seinustu færslur'
		// 		component={ListScreen}
		// 		options={({route, navigation}) => ({
		// 			headerRight: () => <Button onPress={() => navigation.navigate('Stillingar')}>Click me</Button>
		// 		})}/>
		// 	<Screen name='Stillingar' component={SetNotifications} />
			<Navigator tabBar={props => <BottomNavigation {...props} />}>
			<Screen
			name='Mælaborð'
			component={DashboardScreen}
			// component={Rewards}
		/>
    <Screen
			name='Seinustu færslur'
			component={ListScreen}
		/>
			<Screen name='Verðlaun' component={Rewards} />
  </Navigator>
	)
}

export const AppNavigator = () => {
	const user = useSelector(selectCurrentUser)

	console.log(user)
	return (
		<NavigationContainer>
			{
				user
				? <HomeNavigator/>
				: <LoginNavigator />
			}
		</NavigationContainer>
	) ;
};
