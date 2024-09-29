import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { prefillEditForms } from "../../utilities/prefillEditForms";

//Prefills forms with existing post data so you know what and where to edit.
//Also adds an event listener to the form that calls onUpdatePost() when submitted

prefillEditForms();

const form = document.forms.editpostform;

form.addEventListener("submit", onUpdatePost);

authGuard();
