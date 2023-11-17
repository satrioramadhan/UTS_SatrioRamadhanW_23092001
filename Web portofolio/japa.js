// popup--------------------------------------------------------------------------------
const showPopupButton = document.getElementById("showPopup");

const popup = document.querySelector(".popup");

showPopupButton.addEventListener("click", () => {
  popup.style.display = "block";
});

const cancelButton = document.querySelector(".close_popup.cancel");
cancelButton.addEventListener("click", () => {
  popup.style.display = "none";
});

const visitButton = document.querySelector(".close_popup.visit");
visitButton.addEventListener("click", () => {
  window.open("https://github.com/satrioramadhan/Pemrograman_web.git", "blank");
  popup.style.display = "none";
});

// popup2-------------------------------------------------------------------------------
const showPopupButton2 = document.getElementById("showPopup2");

const popup2 = document.querySelector(".popup2");

showPopupButton2.addEventListener("click", () => {
  popup2.style.display = "block";
});

const cancelButton2 = document.querySelector(".close_popup.cancel2");
cancelButton2.addEventListener("click", () => {
  popup2.style.display = "none";
});

const visitButton2 = document.querySelector(".close_popup.visit2");
visitButton2.addEventListener("click", () => {
  window.open(
    "https://jurnalpost.com/asbab-penolakan-konser-coldplay-analisis-acara-catatan-demokrasi-tvone/50755/",
    "blank"
  );
  popup2.style.display = "none";
});

//contact me----------------------------------------------------------------------------
document
  .querySelector(".contact_me")
  .addEventListener("click", function (event) {
    const clickedCard = event.target.closest(".card");

    if (clickedCard) {
      let link;

      if (clickedCard.classList.contains("linkedin-card")) {
        link =
          "https://www.linkedin.com/in/satrio13?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
      } else if (clickedCard.classList.contains("github-card")) {
        link = "https://github.com/satrioramadhan";
      }

      if (link) {
        navigateToNewWindow(link);
      }
    }
  });

function navigateToNewWindow(url) {
  window.open(url, "_blank");
}
