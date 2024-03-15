import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type FilterType = 'All' | 'Active' | 'Completed';

interface FiltersState {
  filter: FilterType;
}

const initialState: FiltersState = {
  filter: 'All',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export default filtersSlice.reducer;