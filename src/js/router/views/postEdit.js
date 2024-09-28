import { onUpdatePost } from "../../ui/post/update";
import { authGuard } from "../../utilities/authGuard";
import { prefillEditForms } from "../../utilities/prefillEditForms";

prefillEditForms();

const form = document.forms.editpostform;
console.log(form);

form.addEventListener("submit", onUpdatePost);

authGuard();
