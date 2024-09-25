import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";
import { buildUser } from "../../utilities/buildProfile";

const form = document.forms.updateProfile;

form.addEventListener("submit", onUpdateProfile);

buildUser();

authGuard();
