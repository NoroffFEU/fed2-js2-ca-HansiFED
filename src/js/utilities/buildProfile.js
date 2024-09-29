/**
 * Builds and displays user profile information in the DOM.
 *
 * @function buildUser
 * @description
 * This function retrieves user data from local storage, creates DOM elements
 * to display the user's profile information, and appends them to the specified
 * section of the webpage. It includes the user's banner image, avatar image,
 * name, and bio. The function checks for a specific user data in local storage
 * and defaults to another user data if the specific one is not found.
 * This is so it can be further used with generating other users in the future
 *
 * It creates the following elements:
 * - A banner image for the user's profile
 * - An avatar image
 * - The user's name
 * - The user's bio
 *
 * @example
 * buildUser();
 */

export function buildUser() {
  const domBody = document.getElementById("profileBody");
  const createUserBanner = document.createElement("img");
  const createAvatarImg = document.createElement("img");
  const createUserName = document.createElement("h2");
  const createUserBio = document.createElement("p");

  createUserBanner.setAttribute("id", "userBanner");
  createAvatarImg.setAttribute("id", "avatarImg");

  let userData;
  if (localStorage.clickedUserData) {
    userData = JSON.parse(localStorage.clickedUserData);
  } else {
    userData = JSON.parse(localStorage.myUserData);
  }

  console.log(userData);

  createUserBanner.src = userData.data.banner.url;
  createUserBanner.setAttribute("alt", userData.data.banner.alt);

  createAvatarImg.src = userData.data.avatar.url;
  createAvatarImg.setAttribute("alt", userData.data.avatar.alt);

  createUserName.innerHTML = userData.data.name;
  createUserBio.innerHTML = userData.data.bio;

  domBody.prepend(createUserBanner, createAvatarImg, createUserName, createUserBio);
}
