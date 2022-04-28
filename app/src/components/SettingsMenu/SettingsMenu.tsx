import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, IndexPath, Layout, MenuItem, OverflowMenu } from '@ui-kitten/components';
import { User } from 'react-native-feather';


export const SettingsMenu = () => {
  const [visible, setVisible] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<IndexPath|undefined>(undefined);

  const onItemSelect = (index: any) => {
    setSelectedIndex(index);
    setVisible(false);
  };

  const renderToggleButton = () => (
		<Button
		appearance='ghost'
		onPress={() => setVisible(true)}
		accessoryLeft={() => (<User color={'black'}/>)}
	/>

  );

  return (
    <Layout style={styles.container} level='1'>
      <OverflowMenu
        anchor={renderToggleButton}
        backdropStyle={styles.backdrop}
        visible={visible}
        selectedIndex={selectedIndex}
        onSelect={onItemSelect}
        onBackdropPress={() => setVisible(false)}>
        <MenuItem title='Tilkynningar'/>
        <MenuItem title='Útskrá'/>

      </OverflowMenu>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 144,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default SettingsMenu;
function useNavigate() {
	throw new Error('Function not implemented.');
}

