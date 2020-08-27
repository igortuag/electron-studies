const { ipcRenderer, shell } = require("electron");
const process = require('process');

let linkFechar = document.querySelector("#link-fechar");
let linkLinkedin = document.querySelector("#link-linkedin");
let versaoElectron = document.querySelector("#versao-electron");

window.onload = () => {
  versaoElectron.textContent = process.versions.electron;
} 

linkFechar.addEventListener("click", () => {
  ipcRenderer.send("fechar-janela-sobre");
});

linkLinkedin.addEventListener("click", () => {
  shell.openExternal("https://www.linkedin.com/in/igortuag")
});
