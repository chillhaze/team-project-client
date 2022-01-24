export const getCurrentUser = state => state.auth.user;
export const isUserLoggedIn = state => state.auth.isUserLoggedIn;
export const isLoadingUser = state => state.auth.isLoadingUser;
export const getUserName = state => state.auth.user.name;
export const getUserId = state => state.auth.user.id;
export const getError = state => state.auth.error;
