// Use Postman, or JavaScript to get your API key
// In Workflow we will learn how to secure this information
export const fetchId = new URLSearchParams(window.location.search).get("id");

export const accessToken = localStorage.getItem("accessToken");

export const API_KEY = "74b3cff5-370d-49fd-85c4-fb7c44c8dbe2";

export const API_BASE = "https://v2.api.noroff.dev";

export const API_AUTH = `${API_BASE}/auth`;

export const API_AUTH_LOGIN = `${API_AUTH}/login`;

export const API_AUTH_REGISTER = `${API_AUTH}/register`;

export const API_AUTH_KEY = `${API_AUTH}/create-api-key`;

export const API_SOCIAL = `${API_BASE}/social`;

export const API_SOCIAL_POSTS = `${API_SOCIAL}/posts`;

export const API_SOCIAL_SELECTED_POST = `${API_SOCIAL}/posts/${fetchId}`;

export const API_SOCIAL_MYUSER_POSTS = `${API_SOCIAL}/profiles/${localStorage.getItem(
  "userName"
)}/posts`;

export const API_SOCIAL_PROFILES = `${API_SOCIAL}/profiles`;

export const API_SOCIAL_PROFILES_UPDATE = `${API_SOCIAL_PROFILES}/${localStorage.getItem(
  "userName"
)}`;
