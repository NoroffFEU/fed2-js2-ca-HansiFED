import { onLogout } from "../../ui/auth/logout";
import { authGuard } from "../../utilities/authGuard";

const button = document.getElementById("logout-button");

button.addEventListener("click", onLogout);

authGuard();
