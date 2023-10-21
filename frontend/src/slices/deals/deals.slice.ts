import { createSlice } from '@reduxjs/toolkit';

import { DataStatus } from '#libs/enums/enums.js';
import { type ValueOf } from '#libs/types/types.js';
import { type DealEntryGetAllItemResponseDto } from '#packages/deals/deals.js';

import { getAll } from './actions.js';

type State = {
  dealsData: DealEntryGetAllItemResponseDto[];
  dataStatus: ValueOf<typeof DataStatus>;
};

const initialState: State = {
  dealsData: [],
  dataStatus: DataStatus.IDLE,
};

const { reducer, actions, name } = createSlice({
  initialState,
  name: 'deals',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAll.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.dealsData = action.payload.items;
      state.dataStatus = DataStatus.FULFILLED;
    });
    builder.addCase(getAll.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

export { actions, name, reducer };
