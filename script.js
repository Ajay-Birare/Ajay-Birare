// let menuList = document.querySelector(".right");
// let btn = document.querySelector(".menu");

// btn.addEventListener("click", () => {
//   menuList.classList.toggle("show");
// });

let menuList = document.querySelector(".right");
let btn = document.querySelector(".menu");

btn.addEventListener("click", function () {
  menuList.classList.toggle("show");
  btn.classList.toggle("menuImg");
});

// .profile .about .skills .education
// .projects .contact

const profile = document.querySelector(".profile");

profile.addEventListener("mouseover", function () {
  console.log("hii");
});
