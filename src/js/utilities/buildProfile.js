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
  const domMain = document.querySelector("main");
  const profileDiv = document.getElementById("profileWrapper");
  const profileWrapper = document.createElement("div");
  const createUserBanner = document.createElement("img");
  const createAvatarImg = document.createElement("img");
  const createUserName = document.createElement("h2");
  const userBioDiv = document.createElement("div");
  const createUserBioHeader = document.createElement("h3");
  const createUserBio = document.createElement("p");

  createUserBanner.setAttribute("id", "userBanner");
  createAvatarImg.setAttribute("id", "avatarImg");

  let userData;
  if (localStorage.clickedUserData) {
    userData = JSON.parse(localStorage.clickedUserData);
  } else {
    userData = JSON.parse(localStorage.myUserData);
  }

  createUserBanner.src = userData.data.banner.url;
  createUserBanner.setAttribute("alt", userData.data.banner.alt);
  createUserBanner.className =
    " absolute top-[280px] z-0 w-full max-h-[400px] object-cover mx-auto object-cover bg-center sm:top-[20px]";

  createAvatarImg.src = userData.data.avatar.url;
  createAvatarImg.setAttribute("alt", userData.data.avatar.alt);
  createAvatarImg.className =
    " w-[200px] h-[200px] self-center rounded-full object-cover border-4 border-black sm:w-[300px] sm:h-[300px]";

  createUserName.innerHTML = userData.data.name;
  createUserName.className = "text-3xl text-white";

  createUserBioHeader.innerHTML = "Bio:";
  createUserBio.innerHTML = userData.data.bio;

  userBioDiv.className = "text-white mb-3 mt-5 p-10 rounded-lg bg-[#151515] flex flex-col gap-4";
  createUserBioHeader.className = "text-xl";

  profileWrapper.className = "flex flex-col items-center gap-10";

  profileDiv.className = "z-10 flex flex-col gap-20 mt-40";

  userBioDiv.append(createUserBioHeader, createUserBio);
  profileDiv.prepend(profileWrapper);
  profileWrapper.append(createAvatarImg, createUserName, userBioDiv);
  domMain.prepend(createUserBanner, profileDiv);
}
