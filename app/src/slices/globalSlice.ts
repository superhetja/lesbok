import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../configureStore';
import { FormData } from '../components/EntryForm';
import { getDateNow } from '../utils/helpers';

interface GlobalState {
  selectedEntryId: string;
	formData: FormData;
}

const emptyValues: FormData = {
	book_name: '',
	book_from: 1,
	book_to: 1,
	comment: '',
	date_of_entry: getDateNow(),
}

const initialState = {
	selectedEntryId: '',
	formData: emptyValues
} as GlobalState;

const globalSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    selectEntry(state, action: PayloadAction<GlobalState>) {
      state.selectedEntryId = action.payload.selectedEntryId;
			state.formData = action.payload.formData;

    },
		updateForm(state, action: PayloadAction<{formData: FormData}>) {
			state.formData = action.payload.formData;
		},
    clearSelectedEntry(state) {
      state.selectedEntryId = '';
			state.formData = emptyValues;
    },

  },
})

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectedEntryId = (state: RootState) => state.global.selectedEntryId;
export const selectedEntryValues = (state: RootState) => state.global.formData;

export const { selectEntry, clearSelectedEntry, updateForm } = globalSlice.actions
export default globalSlice.reducer
