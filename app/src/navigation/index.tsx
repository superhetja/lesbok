import React, { useState } from 'react';
import ListScreen from '../screens/ListScreen/listScreen';
import DashboardScreen from '../screens/DashboardScreen/dashboardScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomNavigation from '../components/Navigations/bottomNavigation';
import SetNotifications from '../components/Notifications/Notifications';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { NotificationScreen } from '../screens/NotificationScreen/notificationScreen';
import { Icon } from 'react-native-elements';
import { DrawerGroup, DrawerItem, Drawer, DrawerProps, IndexPath, MenuItem, OverflowMenu, Layout, Button, Text } from '@ui-kitten/components';
import styles from '../screens/styles';
import SettingsMenu from '../components/SettingsMenu/SettingsMenu';
import { Settings } from 'react-native-feather';
import Rewards from '../components/Rewards/Rewards';




const { Navigator, Screen } = createBottomTabNavigator();



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
)};

export const AppNavigator = () => {
	return(
	<NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
)};

