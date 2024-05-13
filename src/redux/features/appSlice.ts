import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the initial state for the slice
const initialState = {
  currentBoardName: "",
  // Manage the state for opening and closing the Add and Edit Board modal
  isAddAndEditBoardModal: { isOpen: false, variant: "" },
};

export const features = createSlice({
  // Name of the slice
  name: "features",
  initialState,
  // Functions that update the initialState are written inside the reducers object
  reducers: {
    // This function updates the board name when called
    setCurrentBoardName: (state, action: PayloadAction<string>) => {
      state.currentBoardName = action.payload;
    },
    // open add/edit board modal with a specified variant (add or edit)
    openAddAndEditBoardModal: (state, {payload}) => {
      state.isAddAndEditBoardModal.isOpen = true
      state.isAddAndEditBoardModal.variant = payload
    },
    // close add/edit board modal.
    closeAddAndEditBoardModal: (state) => {
      state.isAddAndEditBoardModal.isOpen = false
      state.isAddAndEditBoardModal.variant = ""
    }
  },
});

// Export the functions defined inside the reducers here
export const { 
  setCurrentBoardName,
  openAddAndEditBoardModal,
  closeAddAndEditBoardModal
} = features.actions;

// Selector function to retrieve the current board name from the state
export const getCurrentBoardName = (state: RootState) => state.features.currentBoardName;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalValue = (state: RootState) => state.features.isAddAndEditBoardModal.isOpen;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalVariantValue = (state: RootState) => state.features.isAddAndEditBoardModal.variant;


// Export the reducer for use in the Redux store
export default features.reducer;
