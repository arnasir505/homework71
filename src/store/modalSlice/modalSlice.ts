import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface ModalState {
  show: boolean;
}

const initialState: ModalState = {
  show: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.show = true;
    },
    closeModal: (state) => {
      state.show = false;
    },
  },
});

export const modalReducer = modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;
export const selectModalShow = (state: RootState) => state.modal.show;
