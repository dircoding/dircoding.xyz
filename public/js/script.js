// (C) Dircoding On Github
// MIT LICENSE
// READ MORE AT https://github.com/dircoding/dircoding.xyz/blob/main/LICENSE

const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (theme === "dark") document.body.classList.add("dark");

// event listener stops when the change theme button is clicked
toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark");
   if (theme === "dark") {
     window.localStorage.setItem("theme", "light");
   } else window.localStorage.setItem("theme", "dark");
});