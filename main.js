let barToggel = document.querySelector("i");
let links = document.querySelector(" .links");

barToggel.onclick = function () {
  this.classList.toggle("menu-active");
  links.classList.toggle("open");
};

let img = document.querySelectorAll(".screenshot .image img");
img.forEach((img) => {
  img.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "popup-overlay";
    document.body.appendChild(overlay);
    let popupBox = document.createElement("div");
    popupBox.className = "popup-box";
    let closeBbutton = document.createElement("span");

    closeBbutton.className = "close-button";

    let closTxet = document.createTextNode("X");
    closeBbutton.appendChild(closTxet);

    popupBox.appendChild(closeBbutton);

    document.body.appendChild(popupBox);
    if (img.alt !== null) {
      // creat heading
      let imgHeading = document.createElement("h5");
      // creat text alt
      let imgText = document.createTextNode(img.alt);
      // append the alt to heading
      imgHeading.appendChild(imgText);
      //  append the imgheading to popup box
      popupBox.appendChild(imgHeading);
    }
    // creat img
    let imgPopup = document.createElement("img");
    // set img source
    imgPopup.src = img.src;
    // add img to popup
    popupBox.appendChild(imgPopup);
    document.body.appendChild(popupBox);
  });
});
// close popup
document.addEventListener("click", (e) => {
  if (e.target.classList == "close-button") {
    // /remove the calsslist
    e.target.parentNode.remove();
    document.querySelector(".popup-overlay").remove();
  }
});

let row = document.querySelector(".image");

let scrolling = document.querySelectorAll(".links li a");
function goTothelinks(element) {
  element.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      document.querySelector(e.target.dataset.section).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}
goTothelinks(scrolling);

let back = document.querySelector("#email");
back.addEventListener("click", (e) => {
  e.stopPropagation();
  e.target.style.backgroundColor = "#23292F";
});
document.addEventListener("click", (e) => {
  if (back.id === "email") {
    back.style.backgroundColor = "#d3d9d9";
  }
});

let rowUp = document.querySelector(".up i");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 2000) {
    rowUp.classList.add("show");
  } else {
    rowUp.classList.remove("show");
  }
};
rowUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior:"smooth",
  });
};
