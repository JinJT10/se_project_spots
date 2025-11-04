const profileButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#edit-profile-modal");
const profileForm = profileModal.querySelector(".modal__form");
const profileCloseBtn = profileModal.querySelector(".modal__close-btn");


const profileNameInput = profileModal.querySelector("#profile-name-input");
const profileDescriptionInput= profileModal.querySelector("#profile-description-input");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

function openModal(modal) {
    modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
}

profileButton.addEventListener("click", function() {
    profileNameInput.value = profileNameEl.textContent;
    profileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(profileModal);
});

profileCloseBtn.addEventListener("click", function() {
    closeModal(profileModal);
});

profileForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  console.log("profile submitted");
  closeModal(profileModal);
});

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");

const newPostImage = newPostModal.querySelector("#post-link-input");
const newPostCaption = newPostModal.querySelector("#post-caption-input");


newPostButton.addEventListener("click", function() {
    openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function() {
    closeModal(newPostModal);
});


newPostForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    console.log('Caption input:', newPostCaption.value);
    console.log('Link input', newPostImage.value);
    closeModal(newPostModal);
});

/* I looked back at the previous lessons (specifically innerHTML & 
textContent chapter) and didn't see the purposed of the use of a form
submission handler nor function. Please give me feedback should I need
to change this*/