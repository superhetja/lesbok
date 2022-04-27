import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
	GroupList: undefined;
	Group: {groupId: string};
	Home: NavigatorScreenParams<HomeTabParamList>;
	Notification: undefined;
	SignIn: undefined;
}

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type HomeTabParamList = {
	Dashboard: {studentId: string};
	EntryList: {studentId: string};
}

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<HomeTabParamList, T>,
		RootStackScreenProps<keyof RootStackParamList>
	>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
