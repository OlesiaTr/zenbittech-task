import { createAsyncThunk } from '@reduxjs/toolkit';

import { type AsyncThunkConfig } from '#libs/types/types.js';
import { type DealEntryGetAllItemResponseDto } from '#packages/deals/deals.js';

import { name as sliceName } from './deals.slice.js';

const getAll = createAsyncThunk<
  { items: DealEntryGetAllItemResponseDto[] },
  undefined,
  AsyncThunkConfig
>(`${sliceName}/load-deals`, (_, { extra }) => {
  const { dealsApi } = extra;

  return dealsApi.getAll();
});

export { getAll };
