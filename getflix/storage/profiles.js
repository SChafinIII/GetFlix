'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
    profile: {
        createdAt:"",
        email:"",
        emailVerified:"",
        favoriteIds: [],
        image:"",
        name:"",
        updatedAt:""
    }
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile(state, action) {
            state.profile = action.payload;
        }
    }
});

const profileActions = profileSlice.actions;

export default profileSlice;
export { profileActions };
