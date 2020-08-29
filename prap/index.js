const electron = require("electron");

const { app } = electron;

app.on("ready", () => {
  console.log("A aplicação Electron foi criada e esta pronta para interação");
});
