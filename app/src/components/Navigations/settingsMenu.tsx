import { useNavigation } from "@react-navigation/native";
import { Button, IndexPath, MenuItem, OverflowMenu, useTheme } from "@ui-kitten/components";
import { useState } from "react";
import { Settings } from "react-native-feather";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../slices/authSlice";
import { IconButton } from "../Buttons";



const SettingsMenu = ({children}) => {

	const [selectedIndex, setSelectedIndex] = useState<IndexPath|undefined>(undefined)
  const [visible, setVisible] = useState(false);
	const navigation = useNavigation();
	const dispatch = useDispatch();
	const theme = useTheme();

  const onItemSelect = (index: any) => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = () => (
		<IconButton
			status="basic"
			icon='settings'
			onPress={() => setVisible(true)}
			style={{marginHorizontal: 10}}
		/>
    // <Button
		// 	style={{paddingTop: 10, paddingBottom: 10}}
		// 	accessoryLeft={() => <Settings color={theme['color-basic-500']}/>}
		// 	appearance='ghost'
		// />
  );

	const logOut = () => {
		dispatch(setCredentials({user: null, token: null, role: null}))
	}

  return (
      <OverflowMenu
        anchor={renderToggleButton}
        visible={visible}
        selectedIndex={selectedIndex}
        onSelect={onItemSelect}
        onBackdropPress={() => setVisible(false)}
			>
				{
					children
				}
        <MenuItem
				title='Útskrá'
				onPress={logOut}
				/>
      </OverflowMenu>
  );
};

export default SettingsMenu;
