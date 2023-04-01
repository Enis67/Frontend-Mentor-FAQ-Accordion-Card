const faq = document.querySelectorAll(".space");
// const toggleOne = document.getElementById("invite");
// const toggleSecond = document.getElementById("upload");
// const toggleThird = document.getElementById("reset");
// const toggleFourth = document.getElementById("cancel");
// const toggleFifth = document.getElementById("support");
const arrow = document.querySelectorAll(".description img");
const box = document.getElementById("box");

console.log(arrow);

console.log(faq);

faq.forEach((n, index) => {
  n.addEventListener("click", () => {
    console.log(n);
    n.nextElementSibling.classList.toggle("hide");
    console.log(n.nextElementSibling);
    arrow[index].classList.toggle("arrow");
    box.style.left = "-131px";
    box.style.top = "205px";

    if (n.nextElementSibling.classList.contains("hide")) {
      n.style.fontWeight = "";
      box.style.left = "";
      box.style.top = "";
    } else {
      n.style.fontWeight = "900";
    }
  });
});
