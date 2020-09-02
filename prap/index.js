const { app, BrowserWindow, ipcMain } = require("electron");
const sizeOf = require("image-size");

app.on("ready", () => {
  const janelaPrincipal = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });
  janelaPrincipal.loadURL(`file://${__dirname}/index.html`);
});

ipcMain.on("obterDimensoesDaImagem", (event, path) => {
  sizeOf(path, function (err, dimensions) {
    console.log("largura:" + dimensions.width, "altura:" + dimensions.height);
  });
});
