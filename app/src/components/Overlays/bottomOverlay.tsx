import { Modal } from "@ui-kitten/components";
import { Children, useState } from "react";
import { SafeAreaView } from "react-native";
import { BottomSheet } from 'react-native-elements';

type BottomOverlayProps = {
	isVisible: boolean;
};

const BottomOverlay: React.FC<BottomOverlayProps> = ({isVisible, children}) => {

	return (
		<SafeAreaView>
			<Modal visible={isVisible}>
				{children}
			</Modal>
		</SafeAreaView>
	)

}

export default BottomOverlay;
