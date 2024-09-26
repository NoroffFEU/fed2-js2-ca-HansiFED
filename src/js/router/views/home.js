import { accessToken } from "../../api/constants";
import { readPosts } from "../../api/post/read";
import { onLogout } from "../../ui/auth/logout";
import { authGuard } from "../../utilities/authGuard";

const button = document.getElementById("logout-button");

button.addEventListener("click", onLogout);

if (accessToken) {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("registerButton").style.display = "none";
}

readPosts();

authGuard();
