import { onLogin } from "../../ui/auth/login";

//Attaches the on-login function to the form submission event

const form = document.forms.login;

form.addEventListener("submit", onLogin);
