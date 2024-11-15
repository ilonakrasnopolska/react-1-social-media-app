import {createSlice} from '@reduxjs/toolkit';

// Константы
const baseSettingsUrl = '/settings/';

// Счетчики
let settingsIdCounter = 1;
let urlIdCounter = 1;

//Базовый state
const initialState = {
  settings: [
    {
      title: 'Personal account', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Confidentiality', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Notifications', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Insights', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Language', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Terms and police', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Help', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
    {
      title: 'Log out', id: settingsIdCounter++, url: `${baseSettingsUrl}${urlIdCounter++}`,
    },
  ],
}

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    openSettings: (state, action) => {
      console.log(state, action)
    },
  }
})

export const {
  openSettings,
} = settingsSlice.actions;
export default settingsSlice.reducer;
