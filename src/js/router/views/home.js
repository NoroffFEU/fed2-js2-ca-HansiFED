import { accessToken } from "../../api/constants";
import { onLogout } from "../../ui/auth/logout";
import { authGuard } from "../../utilities/authGuard";

const button = document.getElementById("logout-button");

button.addEventListener("click", onLogout);

if (accessToken) {
  document.getElementById("loginButton").style.display = "none";
  document.getElementById("registerButton").style.display = "none";
}

authGuard();
