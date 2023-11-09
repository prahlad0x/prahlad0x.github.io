let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");
 darkmode.classList.replace("bx-moon", "bx-sun");
document.body.classList.add("active");
darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

document.getElementById("resume-link-1").addEventListener("click", () => {
  window.open(
    "https://1drv.ms/b/s!AuQGWZVjlDmpgZdSmgRdd4wN7PTKww?e=xnLUXf",
    "_blank"
  );
});

document.getElementById("resume-link-2").addEventListener("click", () => {
  // console.log("OPENinig.....");
  window.open(
    "https://1drv.ms/b/s!AuQGWZVjlDmpgZdSmgRdd4wN7PTKww?e=xnLUXf",
    "_blank"
  );
});
