import { enableValidation, settings, disableButton } from "../scripts/validation.js";
import "./index.css";
import Api from "../../utils/api.js";

const profileButton = document.querySelector(".profile__edit-button");
const profileModal = document.querySelector("#edit-profile-modal");
const profileForm = profileModal.querySelector(".modal__form");
const profileCloseBtn = profileModal.querySelector(".modal__close-btn");

const profileNameInput = profileModal.querySelector("#profile-name-input");
const profileDescriptionInput = profileModal.querySelector("#profile-description-input");
const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const profileAvatarEl = document.querySelector(".profile__avatar");

function handleEscKey(evt) {
    if (evt.key === "Escape") {
        const modal = document.querySelector(".modal_is-opened");
        closeModal(modal);
    }
}

function openModal(modal) {
    modal.classList.add("modal_is-opened");
    document.addEventListener("keydown", handleEscKey);
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
    document.removeEventListener("keydown", handleEscKey);
}

profileButton.addEventListener("click", function () {
    profileNameInput.value = profileNameEl.textContent;
    profileDescriptionInput.value = profileDescriptionEl.textContent;
    openModal(profileModal);
});


profileForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    api.editUserInfo({name: profileNameInput.value, about: profileDescriptionInput.value})
        .then((data) => {
            // Use data instead of input values
            profileNameEl.textContent = profileNameInput.value;
            profileDescriptionEl.textContent = profileDescriptionInput.value;
            console.log("profile submitted");
            closeModal(profileModal);
        })
        .catch(console.error);
    
});

const profileAvatarModal = document.querySelector("#edit-avatar-modal");
const profileAvatarForm = profileAvatarModal.querySelector(".modal__form");
const profileAvatarBtn = document.querySelector(".profile__avatar-btn");


profileAvatarBtn.addEventListener("click", function () {
    openModal(profileAvatarModal);
});

profileAvatarForm.addEventListener("submit", function (evt){
    evt.preventDefault();

});


const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostSubmitBtn = newPostModal.querySelector(".modal__submit-btn");
const newPostImage = newPostModal.querySelector("#post-link-input");
const newPostCaption = newPostModal.querySelector("#post-caption-input");

newPostButton.addEventListener("click", function () {
    openModal(newPostModal);
});


newPostForm.addEventListener("submit", function (evt) {
    evt.preventDefault();

    const inputValues = {
        name: newPostCaption.value,
        link: newPostImage.value,
    };

    const cardElement = getCardElement(inputValues);
    cardsList.prepend(cardElement);

    console.log("Caption input:", newPostCaption.value);
    console.log("Link input", newPostImage.value);
    disableButton(newPostSubmitBtn, settings);
    newPostForm.reset();
    closeModal(newPostModal);
});

const previewModal = document.querySelector("#preview-modal");
const previewImage = previewModal.querySelector(".modal__image");
const previewCaption = previewModal.querySelector(".modal__img-caption");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");



const cardTemplate = document
    .querySelector("#card-template")
    .content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function handleImageClick(data) {
    previewImage.src = data.link;
    previewImage.alt = data.name;
    previewCaption.textContent = data.name;
    openModal(previewModal);
}

function getCardElement(data) {
    const cardElement = cardTemplate.cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");

    cardImageEl.src = data.link;
    cardImageEl.alt = data.name;
    cardTitleEl.textContent = data.name;

    const cardLikeBtn = cardElement.querySelector(".card__like-button");
    cardLikeBtn.addEventListener("click", () => {
        cardLikeBtn.classList.toggle("card__like-button_active");
    });

    const cardDeleteBtn = cardElement.querySelector(".card__delete-button");
    cardDeleteBtn.addEventListener("click", () => {
        cardElement.remove();
    });

    cardImageEl.addEventListener("click", () => handleImageClick(data));
    return cardElement;
}

const initialCards = [
    {
        name: "Golden Gate Bridge",
        link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
    },

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
    },
];

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "61a5f12f-3b1b-4935-8dfc-dcc67a1a5b99",
    "Content-Type": "application/json"
  }
});

// Destructure the second item in the callback of the .then()
api.getAppInfo()
    .then(([cards, userInfo]) => {
        console.log(cards);
        cards.forEach((item) => {
            const cardElement = getCardElement(item);
            cardsList.append(cardElement);
        });
        profileNameEl.textContent = userInfo.name
        profileDescriptionEl.textContent = userInfo.about
        profileAvatarEl.src = userInfo.avatar
        
        //Handle the user's information
        // - Set the src of the avatar image
        // - Set the textContent of both the text elements
    })
    .catch(console.error)
    

const modals = document.querySelectorAll(".modal");

modals.forEach((modal) => {
    modal.addEventListener("click", (evt) => {
        if (
            evt.target.classList.contains("modal") ||
            evt.target.closest(".modal__close-btn")
        ) {
            closeModal(modal);
        }
    });
});

enableValidation(settings);