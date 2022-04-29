import React, { useState } from 'react';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import { Button, IndexPath, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { selectCurrentUser, selectUserGroups, setCredentials } from '../slices/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NotificationScreen, InformationScreen, EntryFormScreen, SelectGroupScreen, LoginScreen, GroupScreen} from '../screens/';
import { Settings } from 'react-native-feather';
import { HomeTabParamList, RootStackParamList } from './types';

const { Navigator, Screen } = createBottomTabNavigator<HomeTabParamList>();


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
					title='Upplýsingar'
					onPress={() => navigation.navigate('Information' as never)}
				/>
        <MenuItem
					title='Stilla Tilkynningar'
					onPress={() => navigation.navigate('Notification')}
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
		<Navigator
			tabBar={props => <BottomNavigation {...props} />}
			screenOptions={{
				headerShown: false
			}}
		>
			<Screen
				name='Dashboard'
				component={DashboardScreen}
				options={{
					title: 'Mælaborð'
				}}
			/>
			<Screen
				name='EntryList'
				component={ListScreen}
				options= {{
					title: 'Færslur'
				}}
			/>
  	</Navigator>
	)
}

const MainStack = createNativeStackNavigator<RootStackParamList>();

export const AppNavigator = () => {
	const user = useSelector(selectCurrentUser)

	return (
		<NavigationContainer>
			<MainStack.Navigator >
				{user ?
					<MainStack.Group screenOptions={{ headerRight: OverflowMenuFullWidth }}>
						<MainStack.Screen
							name='GroupList'
							component={SelectGroupScreen}
							options={{
								title: 'Listi'
							}}
						/>
						<MainStack.Screen
							name='EntryForm'
							component={EntryFormScreen}
							options={{
								title: 'Færsla',
								presentation: 'containedModal',
							}}

						/>
						<MainStack.Screen
							component={HomeNavigator}
							name="Home"
							options={{
								title: 'Mælaborð'
							}}
						/>
						<MainStack.Screen
							component={GroupScreen}
							name='Group'
							options={{
								title: 'Nemendalisti'
							}}
						/>
						<MainStack.Screen
							name='Notification'
							component={NotificationScreen}
							options={{
								title: 'Tilkynningar'
							}}
						/>
						<MainStack.Screen
							name='Information'
							component={InformationScreen}
							options={{
								title: 'Upplýsingar'
							}}
						/>
					</MainStack.Group>
				:
					<MainStack.Screen
						name="SignIn"
						component={LoginScreen}

						options={{
							title: 'Innskráning'

						}}
					/>
				}
			</MainStack.Navigator>
		</NavigationContainer>
	) ;
};

export { RootStackParamList, RootStackScreenProps, HomeTabParamList, HomeTabScreenProps} from './types'
