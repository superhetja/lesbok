import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Guardian: NavigatorScreenParams<GuardianStackParamList>;
	Teacher: NavigatorScreenParams<TeacherStackParamList>;
	SignIn: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
	NativeStackScreenProps<RootStackParamList, T>;

// NON AUTHENTICATED
export type UnAuthenticatedStackParamList = {
	SignIn: undefined;
};

export type UnAuthenticatedStackScreenProps<
	T extends keyof UnAuthenticatedStackParamList,
> = NativeStackScreenProps<UnAuthenticatedStackParamList, T>;

// TEACHER STACK TYPES
export type TeacherStackParamList = {
	Group: undefined;
	Home: NavigatorScreenParams<HomeTabParamList>;
	EntryForm: {
		studentId: string;
		entryId: string | undefined;
	};
	DetailedEntry: {
		entryId: string;
	};
};

export type TeacherStackScreenProps<T extends keyof TeacherStackParamList> =
	NativeStackScreenProps<TeacherStackParamList, T>;

// GUARDIAN STACK TYPES
export type GuardianStackParamList = {
	Home: NavigatorScreenParams<HomeTabParamList>;
	Settings: NavigatorScreenParams<SettingsStackParamList>;
	EntryForm: {
		studentId: string;
		entryId: string | undefined;
	};
	DetailedEntry: {
		entryId: string;
	};
};

export type GuardianStackScreenProps<T extends keyof GuardianStackParamList> =
	NativeStackScreenProps<GuardianStackParamList, T>;

// HOME STACK
export type HomeTabParamList = {
	Dashboard: { studentId: string };
	EntryList: { studentId: string };
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<HomeTabParamList, T>,
		GuardianStackScreenProps<keyof GuardianStackParamList>
	>;

// SETTINGS STACK
export type SettingsStackParamList = {
	Notification: undefined;
	Information: undefined;
	NotificationForm: undefined;
};

export type SettingsStackScreenProps<T extends keyof SettingsStackParamList> =
	CompositeScreenProps<
		NativeStackScreenProps<SettingsStackParamList, T>,
		GuardianStackScreenProps<keyof GuardianStackParamList>
	>;

// FOR GLOBAL TYPING

declare global {
	namespace ReactNavigation {
		type RootParamList = RootStackParamList;
	}
}
