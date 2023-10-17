
export const storeAuthToken = (token) =>localStorage.setItem("access_token", token);
export const getStoredAuthToken = () => localStorage.getItem("access_token");
export const removeStoredAuthToken = () => localStorage.removeItem("access_token")



