import { setLogoutListener } from "../../ui/global/logout";
import { onUpdateProfile } from "../../ui/profile/update";
import { authGuard } from "../../utilities/authGuard";
import { buildUser } from "../../utilities/buildProfile";
import { correctHeader } from "../../utilities/correctHeader";

//adds an event listener to the form that calls onUpdateProfile()

const form = document.forms.updateProfile;

form.addEventListener("submit", onUpdateProfile);

setLogoutListener();

correctHeader();

buildUser();

authGuard();
