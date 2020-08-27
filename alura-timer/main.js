const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  console.log("Aplication starts");
  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
  });

  mainWindow.loadURL('http://www.google.com.br/')
});
