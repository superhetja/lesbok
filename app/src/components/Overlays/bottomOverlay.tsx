import { Modal } from "@ui-kitten/components";
import { Children, useEffect, useState } from "react";
import { Dimensions, SafeAreaView } from "react-native";
import { BottomSheet } from 'react-native-elements';
import styles from "./styles";

type BottomOverlayProps = {
	isVisible: boolean;
};

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const BottomOverlay: React.FC<BottomOverlayProps> = ({isVisible, children}) => {

	const [dimensions, setDimensions] = useState({ window, screen });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener(
  //     "change",
  //     ({ window, screen }) => {
  //       setDimensions({ window, screen });
  //     }
  //   );
  //   return () => subscription?.remove();
  // });

	return (
		<SafeAreaView>
			<Modal visible={isVisible} backdropStyle={styles.backdrop} style={{width: dimensions.window.width -24}}>
				{children}
			</Modal>
		</SafeAreaView>
	)

}

export default BottomOverlay;
