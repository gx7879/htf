import "./index.css";

const dropdown = document.getElementById("dropdown");
const arrow = document.getElementById("arrow");
const list = document.getElementById("list");

dropdown.addEventListener("click", () => {
  let mobile = window.matchMedia("(max-width: 1024px)");
  if (mobile.matches) {
    arrow.classList.toggle("rotate-180");
    if (arrow.classList.contains("rotate-180")) {
      list.classList.remove("hidden");
    } else {
      list.classList.add("hidden");
    }
  }
});

let tabsContainer = document.querySelector("#tabs");

let tabTogglers = tabsContainer.querySelectorAll("#tabs a");

tabTogglers.forEach(function (toggler) {
  toggler.addEventListener("click", function (e) {
    e.preventDefault();

    let tabName = this.getAttribute("href");

    let tabContents = document.querySelector("#tab-contents");

    for (let i = 0; i < tabContents.children.length; i++) {
      tabTogglers[i].parentElement.classList.remove("bg-black");
      tabContents.children[i].classList.remove("hidden");
      if ("#" + tabContents.children[i].id === tabName) {
        continue;
      }
      tabContents.children[i].classList.add("hidden");
    }
    e.target.parentElement.classList.add("bg-black");
  });
});

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const header = document.getElementById("header");

menuBtn.addEventListener("click", () => {
  // if (menu.classList.contains("hidden")) {
  //   menu.classList.remove("hidden");
  // } else {
  //   menu.classList.add("hidden");
  // }
  const menuH = menu.clientHeight;
  if (header.classList.contains("max-h-10")) {
    header.classList.remove("max-h-10");
    header.style.maxHeight = `${menuH + 40}px`;
  } else {
    header.classList.add("max-h-10");
    header.style.removeProperty("max-height");
  }
});
