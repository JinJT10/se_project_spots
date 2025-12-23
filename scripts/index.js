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


const initialCards = [
    {
        name: "Val Thorens",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    },
    
    {
        name: "Restaurant terrace",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
    },
    
    {
        name: "An outdoor cafe",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
    },

    {
        name: "A very long bridge, over the forest and through the trees",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
    },

    {
        name: "Tunnel with morning light",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
    },

    {
        name: "Mountain house",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
    }
];

initialCards.forEach(function(item) {
    console.log(item.name);
    console.log(item.link);
});