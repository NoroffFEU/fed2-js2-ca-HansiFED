import { register } from "../../api/auth/register";

export async function onRegister(event) {
  event.preventDefault();

  const form = event.target;
  const registeredUserData = Object.fromEntries(new FormData(form));
  register(registeredUserData);
  console.log(registeredUserData);
}
