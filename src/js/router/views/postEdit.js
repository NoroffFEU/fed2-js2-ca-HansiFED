import { setLogoutListener } from "../../ui/global/logout";
import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { correctHeader } from "../../utilities/correctHeader";
import { prefillEditForms } from "../../utilities/prefillEditForms";

//Prefills forms with existing post data so you know what and where to edit.
//Also adds an event listener to the form that calls onUpdatePost() when submitted

correctHeader();

setLogoutListener();

prefillEditForms();

const form = document.forms.editpostform;

form.addEventListener("submit", onUpdatePost);

authGuard();
