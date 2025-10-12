const profileButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#edit-profile-modal");
const profileCloseBtn = profileModal.querySelector(".modal__close-btn");

profileButton.addEventListener("click", function() {
    profileModal.classList.add("modal_is-opened");
});

profileCloseBtn.addEventListener("click", function() {
    profileModal.classList.remove("modal_is-opened");
});

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

newPostButton.addEventListener("click", function() {
    newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function() {
    newPostModal.classList.remove("modal_is-opened");
});
