

export const loggedInSelector = state => state.auth.isLoggedIn;
export const userMail = state => state.auth.user.email;
export const refreshingSelector = state => state.auth.token;
export const loadingSelector = state => state.auth.isLoading;