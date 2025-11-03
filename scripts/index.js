const profileButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#edit-profile-modal");
const profileForm = profileModal.querySelector(".modal__form");
const profileCloseBtn = profileModal.querySelector(".modal__close-btn");


const profileNameInput = profileModal.querySelector("#profile-name-input");
const profileDescriptionInput= profileModal.querySelector("#profile-description-input");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

profileButton.addEventListener("click", function() {
    profileNameInput.value = profileNameEl.textContent;
    profileDescriptionInput.value = profileDescriptionEl.textContent;
    profileModal.classList.add("modal_is-opened");
});

profileCloseBtn.addEventListener("click", function() {
    profileModal.classList.remove("modal_is-opened");
});

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  console.log("profile submitted");
  profileModal.classList.remove("modal_is-opened");

});

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostImage = newPostModal.querySelector("#post-link-input");
const newPostCaption = newPostModal.querySelector("#post-caption-input");


newPostButton.addEventListener("click", function() {
    newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function() {
    newPostModal.classList.remove("modal_is-opened");
});


newPostForm.addEventListener("submit", function(evt){
    evt.preventDefault();


    console.log('Caption input:', newPostCaption.value);
    console.log('Link input', newPostImage.value);
    newPostModal.classList.remove("modal_is-opened");
});
