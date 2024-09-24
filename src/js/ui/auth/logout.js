export function onLogout() {
  localStorage.clear();
  window.location.href = "/auth/login/";
}
