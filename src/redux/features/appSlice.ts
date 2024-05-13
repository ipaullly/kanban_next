import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Define the initial state for the slice
const initialState = {
  currentBoardName: "",
  // Manage the state for opening and closing the Add and Edit Board modal
  isAddAndEditBoardModal: { 
    isOpen: false, 
    variant: "" 
  },
  //add and edit tasks modal state
  isAddAndEditTaskModal: { 
    isOpen: false, 
    variant: "", 
    title: "", 
    index: -1, 
    name: ""
  },
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
      // return { ...state, currentBoardName: action.payload }
    },
    // open add/edit board modal with a specified variant (add or edit)
    openAddAndEditBoardModal: (state, { payload }) => {
      state.isAddAndEditBoardModal.isOpen = true
      state.isAddAndEditBoardModal.variant = payload
    },
    // close add/edit board modal.
    closeAddAndEditBoardModal: (state) => {
      state.isAddAndEditBoardModal.isOpen = false
      state.isAddAndEditBoardModal.variant = ""
    },
    // Open the Add and Edit task modal with a specified variant (add or edit), title, description, status
    openAddAndEditTaskModal: (state, { payload }) => {
      state.isAddAndEditTaskModal.isOpen = true;
      state.isAddAndEditTaskModal.variant = payload.variant;
      state.isAddAndEditTaskModal.title = payload.title;
      state.isAddAndEditTaskModal.index = payload.index;
      state.isAddAndEditTaskModal.name = payload.name;
    },
    // Close the Add and Edit task modal
    closeAddAndEditTaskModal: (state) => {
      state.isAddAndEditTaskModal.isOpen = false;
      state.isAddAndEditTaskModal.variant = "";
      state.isAddAndEditTaskModal.title = "";
      state.isAddAndEditTaskModal.index = -1;
      state.isAddAndEditTaskModal.name = "";
    },
  },
});

// Export the functions defined inside the reducers here
export const { 
  setCurrentBoardName,
  openAddAndEditBoardModal,
  closeAddAndEditBoardModal,
  openAddAndEditTaskModal,
  closeAddAndEditTaskModal
} = features.actions;

// Selector function to retrieve the current board name from the state
export const getCurrentBoardName = (state: RootState) => state.features.currentBoardName;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalValue = (state: RootState) => state.features.isAddAndEditBoardModal.isOpen;
// Selector functions to retrieve isOpen value of state from the isAddAndRditBoardModal state
export const getAddAndEditBoardModalVariantValue = (state: RootState) => state.features.isAddAndEditBoardModal.variant;

// Selector function to retrieve isOpen state value  
export const getAddAndEditTaskModalValue = (state: RootState) => state.features.isAddAndEditTaskModal.isOpen;
// Selector function to retrieve variant state value 
export const getAddAndEditTaskModalVariantValue = (state: RootState) => state.features.isAddAndEditTaskModal.variant;
// Selector function to retrieve title state value
export const getAddAndEditTaskModalTitleValue = (state: RootState) => state.features.isAddAndEditTaskModal.title;
// Selector function to retrieve index state value
export const getAddAndEditTaskModalIndexValue = (state: RootState) => state.features.isAddAndEditTaskModal.index;
// Selector function to retrieve name state value
export const getAddAndEditTaskModalNameValue = (state: RootState) => state.features.isAddAndEditTaskModal.name;

// Export the reducer for use in the Redux store
export default features.reducer;
