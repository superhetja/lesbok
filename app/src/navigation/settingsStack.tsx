import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { IconButton } from "../components/Buttons";
import { InformationScreen, NotificationScreen, NotificationFormScreen } from "../screens";
import { SettingsStackParamList } from "./types";

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
	return (
		<Stack.Navigator screenOptions={{headerShown: false}}>
			<Stack.Screen
				name='Information'
				component={InformationScreen}
			/>
			<Stack.Screen
				name='Notification'
				component={NotificationScreen}
			/>
			<Stack.Screen
				name='NotificationForm'
				component={NotificationFormScreen}
				options={({navigation}) => ({
					presentation: 'modal',
					headerShown: true,
					title: 'Skrá nýja áminningu',
					headerLeft: () => (
						<IconButton icon='close' onPress={() => navigation.goBack()} />
					)
				})}
			/>
		</Stack.Navigator>
	)
}

export default SettingsStack;
