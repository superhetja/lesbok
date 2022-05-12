import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ModalService, Layout, Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import styles from './styles';
import { LoginForm } from '../components/LoginForm';
import { useLoginMutation } from '../services/backend';
import { setCredentials } from '../slices/authSlice';
import { Roles, UserDetailResponse } from '../utils/types';
import { setCurrentGroup, setCurrentStudent } from '../slices/globalSlice';

function LoginScreen() {
	let modalID = '';
	const dispatch = useDispatch();
	const [login, { isLoading }] = useLoginMutation();

	const hideModal = () => {
		ModalService.hide(modalID);
	};

	/**
	 * Modal for selecting user role
	 */
	const renderSelectRole = (
		roles: Roles[],
		onRoleSelect: (role: Roles) => void,
	) => {
		return (
			<Layout style={styles.centerModal}>
				<Text category="s1" style={{ marginBottom: 20 }}>
					Vinsamlegast veldu hlutverk:
				</Text>
				{roles.map(role => (
					<Button
						style={{ marginBottom: 10 }}
						key={role}
						appearance="outline"
						size="giant"
						onPress={() => {
							hideModal();
							onRoleSelect(role);
						}}
					>
						{role === Roles.GUARDIAN ? 'Foreldri' : 'Kennari'}
					</Button>
				))}
			</Layout>
		);
	};

	/**
	 * Shows select role modal
	 */
	const showModal = (roles: Roles[], onRoleSelect: (role: Roles) => void) => {
		const selectRole = renderSelectRole(roles, onRoleSelect);
		modalID = ModalService.show(selectRole, { onBackdropPress: hideModal });
	};

	const setUser = (user: UserDetailResponse, token: string, role: Roles) => {
		if (role === Roles.GUARDIAN) {
			dispatch(setCurrentStudent({ studentId: user.children[0].id }));
		} else {
			dispatch(setCurrentGroup({ groupId: user.groups[0].id }));
		}
		dispatch(setCredentials({ user, token, role }));
	};

	const authenticate = async (name: string) => {
		try {
			const { user, token } = await login({ national_id: name }).unwrap();
			// get all user roles
			const roles = user.groups.map(group => group.Access.role);
			// add guradian role if needed
			if (user.children.length) {
				roles.push(Roles.GUARDIAN);
			}
			const uniqRoles = [...new Set(roles)];
			// if more than one role ask user to choose
			if (uniqRoles.length > 1) {
				showModal(uniqRoles, role => setUser(user, token, role));
			} else if (uniqRoles.length === 1) {
				setUser(user, token, uniqRoles[0]);
			} else {
				showMessage({
					message: 'Úpps eitthvað fór úrskeiðis!',
					type: 'warning',
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<View style={styles.container}>
			<LoginForm authorize={authenticate} />
		</View>
	);
}

export default LoginScreen;
