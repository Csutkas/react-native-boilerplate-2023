import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { LANGUAGE_EN } from '../../utils/constants';

export type AppLanguage = 'en' | 'hu';

interface SettingsState {
  selectedLanguage: AppLanguage;
}

const initialState: SettingsState = {
  selectedLanguage: LANGUAGE_EN,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSelectedLanguage: (state, actions: PayloadAction<AppLanguage>) => {
      state.selectedLanguage = actions.payload;
    },
  },
});

export const { setSelectedLanguage } = settingsSlice.actions;
export default settingsSlice.reducer;
