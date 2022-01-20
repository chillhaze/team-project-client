export const getCurrentUser = state => state.auth.user;
export const isUserLoggedIn = state => state.auth.isUserLoggedIn;
export const isLoadingUser = state => state.auth.isLoadingUser;
export const getUserName = state => state.auth.user.name;
// export const getToken = state => state.auth.token;