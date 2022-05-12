/* eslint-disable no-nested-ternary */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { LoginScreen } from '../screens';
import { selectCurrentRole, selectCurrentUser } from '../slices/authSlice';
import { RootStackParamList } from './types';
import { Roles } from '../utils/types';
import GuardianStack from './guardianStack';
import TeacherStack from './teacherStack';

const MainStack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
	const user = useSelector(selectCurrentUser);
	const role = useSelector(selectCurrentRole);

	return (
		<NavigationContainer>
			<MainStack.Navigator screenOptions={{ headerShown: false }}>
				{user && role === Roles.GUARDIAN ? (
					<MainStack.Screen name="Guardian" component={GuardianStack} />
				) : role === Roles.TEACHER ? (
					<MainStack.Screen name="Teacher" component={TeacherStack} />
				) : (
					<MainStack.Screen
						name="SignIn"
						component={LoginScreen}
						options={{
							title: 'Innskráning',
						}}
					/>
				)}
			</MainStack.Navigator>
		</NavigationContainer>
	);
}
