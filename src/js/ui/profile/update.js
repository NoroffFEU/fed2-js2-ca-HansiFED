import { updateProfile } from "../../api/profile/update";

/**
 * Handles the form submission for updating the user profile.
 *
 * @async
 * @function onUpdateProfile
 * @param {Event} event - The event object representing the form submission.
 * @description
 * This function prevents the default form submission behavior and constructs an object
 * containing updated user profile information. It retrieves values from the form fields
 * for the user's bio, banner, and avatar, and then calls the `updateProfile` function
 * to send the updated profile data to the Noroff API.
 *
 * @returns {Promise<void>} A promise that resolves when the profile update request is processed.
 *
 */

export async function onUpdateProfile(event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  const profileUpdate = {
    bio: formData.get("bio") ?? "",
    banner: {
      url: formData.get("banner") ?? "",
      alt: "",
    },
    avatar: {
      url: formData.get("pfp") ?? "",
      alt: "",
    },
  };

  updateProfile(profileUpdate);
}
