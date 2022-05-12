const btnOpacity = document.getElementById("button-opacity");
const instagram = document.getElementById("instagram");
const behance = document.getElementById("behance");
const art = document.getElementById("art");
const link = document.getElementById("link");
const github = document.getElementById("github");
const butCrom = document.getElementById("button-chrom");

function handleClick() {
  butCrom.style.cssText = `
  z-index: 10;`;

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
}

function stop() {
  butCrom.style.cssText = `
  z-index: 0;`;

  instagram.style.cssText = `
       position: absolute;`;

  behance.style.cssText = `
       position: absolute;`;

  art.style.cssText = `
       position: absolute;`;

  link.style.cssText = `
       position: absolute;`;

  github.style.cssText = `
       position: absolute;`;
}
