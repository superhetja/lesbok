import { IndexPath, MenuItem, OverflowMenu } from '@ui-kitten/components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { IconButton } from '../Buttons';

function SettingsMenu({ children }) {
	const [selectedIndex, setSelectedIndex] = useState<IndexPath | undefined>(
		undefined,
	);
	const [visible, setVisible] = useState(false);
	const dispatch = useDispatch();

	const onItemSelect = (index: any) => {
		setSelectedIndex(index);
		setVisible(false);
	};

	const renderToggleButton = () => (
		<IconButton
			status="basic"
			icon="settings"
			onPress={() => setVisible(true)}
			style={{ marginHorizontal: 10 }}
		/>
	);

	const logOut = () => {
		dispatch(setCredentials({ user: null, token: null, role: null }));
	};

	return (
		<OverflowMenu
			anchor={renderToggleButton}
			visible={visible}
			selectedIndex={selectedIndex}
			onSelect={onItemSelect}
			onBackdropPress={() => setVisible(false)}
		>
			{children}
			<MenuItem title="Útskrá" onPress={logOut} />
		</OverflowMenu>
	);
}

export default SettingsMenu;
