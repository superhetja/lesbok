import { View } from "react-native";
import SetNotifications from "../../components/Notifications/Notifications";
import { RootStackScreenProps } from "../../navigation";

type NotificationFormScreenProps = RootStackScreenProps<'NotificationForm'>;


const NotificationFormScreen = ({navigation}: NotificationFormScreenProps) => {

	const onSubmitCallback = () => {
		navigation.goBack();
	}

	return (
		<View>
			<SetNotifications onSubmitCallback={onSubmitCallback} />
		</View>
	)
}

export default NotificationFormScreen;
