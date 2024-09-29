import { onRegister } from "../../ui/auth/register";

//Attaches the on-login function to the form submission event

const form = document.forms.register;

form.addEventListener("submit", onRegister);
