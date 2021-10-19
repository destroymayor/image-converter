import { atom } from 'recoil';

export const selectFilesState = atom({
  key: 'selectFilesState',
  default: {
    isLoading: 'idle',
    data: [],
  },
});

export const convertFilesState = atom({
  key: 'convertFilesState',
  default: {
    isLoading: 'idle',
    data: [],
  },
});

export default convertFilesState;
