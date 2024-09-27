export function buildUser() {
  const domBody = document.getElementById("profileBody");
  const createUserBanner = document.createElement("img");
  const createAvatarImg = document.createElement("img");
  const createUserName = document.createElement("h2");
  const createUserBio = document.createElement("p");

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
