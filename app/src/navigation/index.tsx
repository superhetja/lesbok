import React, { useState } from 'react';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import { Button, IndexPath, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectCurrentUser, setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NotificationScreen } from '../screens/NotificationScreen/notificationScreen';
import { ArrowLeft, Settings } from 'react-native-feather';
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
);

export const OverflowMenuFullWidth = () => {

	const [selectedIndex, setSelectedIndex] = useState<IndexPath|undefined>(undefined)
  const [visible, setVisible] = React.useState(false);
	const navigation = useNavigation();
	const dispatch = useDispatch();

  const onItemSelect = (index: any) => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = () => (
    <Button
			onPress={() => setVisible(true)}
			accessoryLeft={() => <Settings/>}
			appearance='ghost'
		/>
  );

	const logOut = () => {
		dispatch(setCredentials({user: null, token: null}))
	}

  return (
      <OverflowMenu
        anchor={renderToggleButton}
        visible={visible}
        selectedIndex={selectedIndex}
        onSelect={onItemSelect}
        onBackdropPress={() => setVisible(false)}
			>
        <MenuItem
					title='Tilkynningar'
					onPress={() => navigation.navigate('notifications' as never)}
				/>
        <MenuItem
					title='Útskrá'
					onPress={logOut}
				/>
      </OverflowMenu>
  );
};


const HomeNavigator = () => {

	return(
		<Navigator tabBar={props => <BottomNavigation {...props} />}>
			<Screen
				name='dashboard'
				component={DashboardScreen}
				// component={Rewards}
				options={({route, navigation}) => ({
					headerRight: OverflowMenuFullWidth,
					title: 'Mælaborð'
				})}
			/>
    <Screen
			name='list'
			component={ListScreen}
		/>
		<Screen
			name='notifications'
			component={NotificationScreen}
			options={({route, navigation}) => ({
				title: 'Tilkynningar',
				headerLeft: () => <Button appearance='ghost' accessoryLeft={<ArrowLeft/>} onPress={navigation.goBack}/> // EKKI BREYTA
			})}
		/>
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
