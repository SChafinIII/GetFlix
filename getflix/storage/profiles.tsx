import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProfileState {
    createdAt: string;
    email: string;
    emailVerified: string;
    favoriteIds?: string[];
    image: string;
    name: string;
    updatedAt: string;
}

interface InitialState {
    profile: ProfileState;
}

const initialState: InitialState = {
    profile: {
        createdAt: "",
        email: "",
        emailVerified: "",
        favoriteIds: [],
        image: "",
        name: "",
        updatedAt: "",
    },
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfile(state, action: PayloadAction<ProfileState>) {
            state.profile = action.payload;
        },
    },
});

const profileActions = profileSlice.actions;

export default profileSlice;
export { profileActions };
