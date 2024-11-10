import { setLogoutListener } from "../../ui/global/logout";
import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";
import { correctHeader } from "../../utilities/correctHeader";

authGuard();

//Attaches the onCreatePost function to the form submission event
correctHeader();

setLogoutListener();

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
