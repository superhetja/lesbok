import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../configureStore';
import { getDateNow } from '../utils/helpers';
import { FormDataWithDate } from '../utils/types';

interface GlobalState {
	selectedEntryId: string;
	formData: FormDataWithDate;
	currentStudent: string | false;
	currentGroup: string;
	expoPushToken: string;
}

const emptyValues: FormDataWithDate = {
	book_id: '',
	book_name: '',
	book_from: 1,
	book_to: 1,
	comment: '',
	date_of_entry: getDateNow(),
};

const initialState = {
	selectedEntryId: '',
	formData: emptyValues,
	currentStudent: false,
	currentGroup: '',
	expoPushToken: '',
} as GlobalState;

const globalSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		selectEntry(
			state,
			action: PayloadAction<{
				formData: FormDataWithDate;
				selectedEntryId: string;
			}>,
		) {
			state.selectedEntryId = action.payload.selectedEntryId;
			state.formData = action.payload.formData;
		},
		updateForm(state, action: PayloadAction<{ formData: FormDataWithDate }>) {
			state.formData = action.payload.formData;
		},
		clearSelectedEntry(state) {
			state.selectedEntryId = '';
			state.formData = emptyValues;
		},
		setCurrentStudent(state, action: PayloadAction<{ studentId: string }>) {
			state.currentStudent = action.payload.studentId;
		},
		setCurrentGroup(state, action: PayloadAction<{ groupId: string }>) {
			state.currentGroup = action.payload.groupId;
		},
		setExpoPushToken(state, action: PayloadAction<{ expoPushToken: string }>) {
			state.expoPushToken = action.payload.expoPushToken;
		},
	},
});

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectedEntryId = (state: RootState) =>
	state.global.selectedEntryId;
export const selectedEntryValues = (state: RootState) => state.global.formData;
export const selectCurrentStudent = (state: RootState) =>
	state.global.currentStudent;
export const selectCurrentStudentOrFirst = (state: RootState) =>
	state.global.currentStudent ?? state.auth.user?.children?.[0].id;
export const selectCurrentGroup = (state: RootState) =>
	state.global.currentGroup;
export const selectExpoPushToken = (state: RootState) =>
	state.global.expoPushToken;

export const {
	selectEntry,
	clearSelectedEntry,
	updateForm,
	setCurrentGroup,
	setCurrentStudent,
	setExpoPushToken,
} = globalSlice.actions;

export default globalSlice.reducer;
