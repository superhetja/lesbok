import React from 'react';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import {
	BottomNavigation as UIKBottomNavigation,
	BottomNavigationTab,
	Layout,
} from '@ui-kitten/components';
import { Home, List } from 'react-native-feather';
import { useSelector } from 'react-redux';
import { AddButton } from '../Buttons';
import { selectCurrentStudent } from '../../slices/globalSlice';
import styles from './styles';

function BottomNavigation({ navigation, state }: BottomTabBarProps) {
	const student = useSelector(selectCurrentStudent);

	return (
		<Layout>
			<Layout style={styles.navigationWrapper}>
				<Layout style={styles.buttonWrapper}>
					{student && (
						<AddButton
							style={styles.button}
							onPress={() =>
								navigation.navigate('EntryForm', { studentId: student })
							}
						/>
					)}
				</Layout>
				<UIKBottomNavigation
					selectedIndex={state.index}
					// get the student id from route
					onSelect={index =>
						navigation.navigate(
							state.routeNames[index],
							state.routes[state.index].params,
						)
					}
				>
					<BottomNavigationTab icon={props => <Home {...props} />} />
					<BottomNavigationTab icon={props => <List {...props} />} />
				</UIKBottomNavigation>
			</Layout>
		</Layout>
	);
}

export default BottomNavigation;
