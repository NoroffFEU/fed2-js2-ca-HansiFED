import { myUserData } from "../api/constants";
import { accessToken } from "../api/constants";

export function correctHeader() {
  if (accessToken) {
    document.getElementById("loginButton").style.display = "none";
    document.getElementById("registerButton").style.display = "none";
    document.getElementById("profilePicture").setAttribute("src", myUserData.data.avatar.url);
  }
}
