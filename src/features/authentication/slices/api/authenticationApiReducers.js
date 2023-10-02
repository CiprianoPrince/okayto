export const setCredentials = (state, action) => {
    const { accessToken } = action.payload;
    state.token = accessToken;
};

export const logOut = (state) => {
    state.token = null;
};

export const signinMutation = (credentials) => ({
    url: '/auth',
    method: 'POST',
    body: { ...credentials },
});

export const signupMutation = (credentials) => ({
    url: '/register',
    method: 'POST',
    body: credentials,
});

export const signoutMutation = () => ({
    url: '/logout',
    method: 'GET',
});

export const refreshTokenMutation = () => ({
    url: '/refresh',
    method: 'GET',
});
