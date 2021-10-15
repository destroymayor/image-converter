import { atom } from 'recoil';

export const convertFilesState = atom({
  key: 'convertFilesState',
  default: {
    isLoading: 'idle',
    data: [],
  },
});

export default convertFilesState;
