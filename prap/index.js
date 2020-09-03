const { app, BrowserWindow, ipcMain } = require("electron");
const sizeOf = require("image-size");
let mainWindow
app.on("ready", () => {
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("obterDimensoesDaImagem", (event, path) => {
  sizeOf(path, function (err, dimensions) {
    mainWindow.webContents.send('dimensoesDaImagem', dimensions)
    console.log("largura:" + dimensions.width, "altura:" + dimensions.height );
  });
});
