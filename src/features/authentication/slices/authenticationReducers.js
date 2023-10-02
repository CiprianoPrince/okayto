export const setCredentials = (state, action) => {
    const { accessToken } = action.payload;
    state.token = accessToken;
};

export const logOut = (state) => {
    state.token = null;
};
