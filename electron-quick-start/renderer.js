// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

const fs = require("fs");
const { ipcRenderer } = require("electron");

var content = fs.readFileSync(__dirname + "/index.html");

document.querySelector("#teste").innerText = content;

// ipc render - sync
let result = ipcRenderer.sendSync("sync-ipcmain", "ola ipcrender");
console.log(result);

// ipc render - async

ipcRenderer.on("async-ipcrender", (event, args) => {
  console.log("ipcrender", args);
});

ipcRenderer.send("async-ipcmain", { msg: "oiii" });
