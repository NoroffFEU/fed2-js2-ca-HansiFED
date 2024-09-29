import { onCreatePost } from "../../ui/post/create";
import { authGuard } from "../../utilities/authGuard";

authGuard();

//Attaches the onCreatePost function to the form submission event

const form = document.forms.createPost;

form.addEventListener("submit", onCreatePost);
