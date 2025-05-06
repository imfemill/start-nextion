'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    title: ''
};

export const currentPageTitleSlice = createSlice({
    name: 'pageInfo',
    initialState,
    reducers: {
        setCurrentPageTitle: (state, { payload }) => {
            state.title = payload?.title;
        }
    }
});

export const { setCurrentPageTitle } = currentPageTitleSlice.actions;

export default currentPageTitleSlice.reducer;
