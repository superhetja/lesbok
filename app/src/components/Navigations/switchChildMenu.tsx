import { IndexPath, MenuItem, OverflowMenu } from '@ui-kitten/components';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentStudent } from '../../slices/globalSlice';
import { StudentResponse } from '../../utils/types';
import { InitialsButton } from '../Buttons';

type SwitchChildMenuProps = {
	profiles: StudentResponse[];
};

function SwitchChildMenu({ profiles }: SwitchChildMenuProps) {
	const [visible, setVisible] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState<IndexPath>(
		new IndexPath(0),
	);

	const onItemSelect = (index: IndexPath) => {
		setSelectedIndex(index);
		setVisible(false);
	};

	const dispatch = useDispatch();

	const switchChild = (id: string) => {
		dispatch(setCurrentStudent({ studentId: id }));
	};

	const renderToggleButton = (name: string) => {
		const initials = name
			.split(' ', 2)
			.map(n => n[0])
			.join('');
		return (
			<InitialsButton onPress={() => setVisible(true)} initials={initials} />
		);
	};

	return (
		<OverflowMenu
			anchor={() => renderToggleButton(profiles[selectedIndex.row].name)}
			visible={visible}
			selectedIndex={selectedIndex}
			onSelect={onItemSelect}
			onBackdropPress={() => setVisible(false)}
		>
			{profiles.map(element => (
				<MenuItem
					key={element.id}
					title={element.name}
					onPress={() => switchChild(element.id)}
				/>
			))}
		</OverflowMenu>
	);
}

export default SwitchChildMenu;
