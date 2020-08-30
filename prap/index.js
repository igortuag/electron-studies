const { app, BrowserWindow } = require("electron");

app.on("ready", () => {
  const janelaPrincipal = new BrowserWindow({});
  janelaPrincipal.loadURL(`file://${__dirname}/index.html`);
});
