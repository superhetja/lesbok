import { Children, useState } from "react";
import { SafeAreaView } from "react-native";
import { BottomSheet } from 'react-native-elements';

type BottomOverlayProps = {
	isVisible: boolean;
};

const BottomOverlay: React.FC<BottomOverlayProps> = ({isVisible, children}) => {

	return (
		<SafeAreaView>
			<BottomSheet modalProps={{}} isVisible={isVisible}>
				{children}
			</BottomSheet>
		</SafeAreaView>
	)

}

export default BottomOverlay;
