const btnOpacity = document.getElementById("button-opacity");
const background = document.getElementById("background");
const instagram = document.getElementById("instagram");
const behance = document.getElementById("behance");
const art = document.getElementById("art");
const link = document.getElementById("link");
const github = document.getElementById("github");

btnOpacity.addEventListener("click", function handleClick() {
  instagram.style.cssText = `
   position: relative;
   bottom: 10px;
   right: -75px;
   `;

  behance.style.cssText = `
   position: relative;
   bottom: 150px;
   `;

  art.style.cssText = `
   position: relative;
   bottom: 200px;
   `;

  link.style.cssText = `
   position: relative;
   bottom: 150px;
   `;

  github.style.cssText = `
   position: relative;
   bottom: 10px;
   right: 75px;
   `;
});

